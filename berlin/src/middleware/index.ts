import { Application } from 'express';
import passport from 'passport';
import requestMethods from './requestMethods';
import cookieParser from 'cookie-parser';

export default (app: Application) => {
  app.use(requestMethods);
  app.use(passport.initialize());
  app.use(cookieParser());
};
