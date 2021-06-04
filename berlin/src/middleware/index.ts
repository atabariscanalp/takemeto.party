import { Application } from 'express';
import passport from 'passport';
import requestMethods from './requestMethods';
import cookieParser from 'cookie-parser';
import { Strategy } from './passport.config';

export default (app: Application) => {
  passport.use(Strategy);
  app.use(requestMethods);
  app.use(passport.initialize());
  app.use(cookieParser());
};
