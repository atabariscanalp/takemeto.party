import "reflect-metadata";
import * as tp from "type-graphql";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ProfileResolver, UserResolver } from "./resolvers";
import { PrismaClient, Role } from "@prisma/client";
import middleware from "./middleware";
import dayjs from "dayjs";
import { getGoogleAuthUrl, getTokens } from "./auth/google.config";
import axios from "axios";
import jwt from "jsonwebtoken";
import { getUserFromId, UserFindOrCreate } from "./auth/helper";

(async () => {
  const PORT = process.env.PORT || 5000;
  const app = express();
  const prisma = new PrismaClient();

  middleware(app);

  app.get("/auth/google", (req, res) => {
    return res.redirect(getGoogleAuthUrl());
  });

  app.get("/auth/google/callback", async (req, res) => {
    const code = req.query.code as string;

    const { id_token, access_token } = await getTokens({
      code,
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      redirectUri: `${process.env.SERVER_ROOT_URI}/auth/google/callback`,
    });

    const { sub, name, given_name, picture, email } = await axios
      .get(
        `https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${access_token}`,
        {
          headers: {
            Authorization: `Bearer ${id_token}`,
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => {
        console.error("Failed to fetch user");
        throw new Error(err.message);
      });

    const user = await UserFindOrCreate({
      id: sub,
      given_name: given_name,
      email: email,
      avatar: picture,
    });

    const { id, role } = user;

    const token = jwt.sign({ id, role }, process.env.JWT_SECRET!);

    res.cookie("auth_cookie", token, {
      expires: dayjs().add(365, "days").toDate(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.redirect(`${process.env.UI_ROOT_URI}/home`);
  });

  app.get("/logout", (req, res) => {
    res.clearCookie("auth_cookie");
    return res.redirect(`${process.env.UI_ROOT_URI}`);
  });

  const schema = await tp.buildSchema({
    resolvers: [UserResolver, ProfileResolver],
  });

  type Token = {
    id: string;
    role: Role;
    iat: Number;
  };

  const server = new ApolloServer({
    schema: schema,
    context: async ({ req, res }) => {
      const token = jwt.verify(
        req.cookies["auth_cookie"],
        process.env.JWT_SECRET!
      );
      const user = await getUserFromId((token as Token).id);
      const context = {
        prisma,
        req,
        res,
        user,
      };
      return context;
    },
  });

  server.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, () => {
    console.log(
      `server started at https://${process.env.SERVER_ROOT_URI}:${PORT}/graphql`
    );
  });
})();
