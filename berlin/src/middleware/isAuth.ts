import { AuthenticationError } from "apollo-server-errors";
import { MiddlewareFn } from "type-graphql";
import { Context } from "../utils/context";

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  if (!context.user)
    throw new AuthenticationError("you must be authenticated!");

  return next();
};
