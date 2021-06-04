import 'reflect-metadata';
import * as tp from 'type-graphql';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ProfileResolver, UserResolver } from './resolvers';
import passport from 'passport';
import { PrismaClient } from '@prisma/client';
import middleware from './middleware';
import dayjs from 'dayjs';

(async () => {
  const PORT = process.env.PORT || 5000;
  const app = express();
  const prisma = new PrismaClient();

  middleware(app);

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['email', 'profile'],
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
      return res.redirect('http://localhost:3000/home');
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
