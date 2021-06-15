import { Application } from "express";
import requestMethods from "./requestMethods";
import cookieParser from "cookie-parser";
import cors from "cors";

export default (app: Application) => {
  app.use(cookieParser());
  app.use(requestMethods);
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
};
