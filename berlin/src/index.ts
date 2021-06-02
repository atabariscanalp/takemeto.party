import 'reflect-metadata';
import * as tp from 'type-graphql';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ProfileResolver, UserResolver } from './resolvers';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client';
import { randomInt } from 'crypto';
import middleware from './middleware';
import dayjs from 'dayjs';

(async () => {
  const PORT = process.env.PORT || 5000;
  const app = express();
  const prisma = new PrismaClient();

  passport.use(
    new GoogleStrategy.Strategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: 'http://localhost:5000/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const { id, displayName, emails, photos } = profile;
        const user = await prisma.user.findUnique({
          where: {
            googleId: id,
          },
        });
        console.log('USER ', user);
        if (!user) {
          const newUser = await prisma.user.create({
            data: {
              username: displayName
                ? displayName
                : `user-${randomInt(321983798, 9484239098, (err, n) => {
                    if (err) return '47584803';
                  })}`,
              email: emails![0].value,
              googleId: id,
              profile: {
                create: {
                  avatar: photos![0].value,
                },
              },
            },
          });
          return done(null, newUser, {
            access_token: accessToken,
            refresh_token: refreshToken,
          });
        }
        console.log(profile);
        return done(null, user, {
          access_token: accessToken,
          refresh_token: refreshToken,
        });
      }
    )
  );

  middleware(app);

  app.get(
    '/google-login',
    passport.authenticate('google', {
      scope: ['email'],
      accessType: 'offline',
    })
  );

  app.get('/auth/google/callback', function (req, res, next) {
    passport.authenticate('google', { session: false }, (err, user, info) => {
      console.log('info: ', info);
      if (err) return next(err);
      if (!user) return res.redirect('/');
      res.cookie('login_cookie', JSON.stringify(info), {
        secure: process.env.NODE_ENV !== 'development',
        httpOnly: true,
        expires: dayjs().add(30, 'days').toDate(),
      });
      res.send('AUTH IS GOOOOD');
    })(req, res, next);
  });

  const schema = await tp.buildSchema({
    resolvers: [UserResolver, ProfileResolver],
  });

  const server = new ApolloServer({
    schema: schema,
  });

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}/graphql`);
  });
})();
