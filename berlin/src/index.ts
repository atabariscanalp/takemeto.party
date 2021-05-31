import 'reflect-metadata';
import * as tp from 'type-graphql';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ProfileResolver, UserResolver } from './resolvers';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client';

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
      async (accessToken, refreshToken, profile, cb) => {
        const { id, displayName, emails, photos } = profile;
        const user = await prisma.user.findUnique({
          where: {
            googleId: id,
          },
        });
        if (!user) {
          const newUser = await prisma.user.create({
            data: {
              username: displayName ? displayName : 'user-x', //add cuid or uuid
              email: emails![0].value,
              googleId: id,
              profile: {
                create: {
                  avatar: photos![0].value,
                },
              },
            },
          });
          return cb(null, newUser);
        }
        console.log(profile);
        return cb(null, user);
      }
    )
  );

  app.use(passport.initialize());

  app.get(
    '/google-login',
    passport.authenticate('google', { scope: ['email'] })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
      res.send('AUTH IS GOOOOOOD');
    }
  );

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
