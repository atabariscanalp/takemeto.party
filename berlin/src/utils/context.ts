import { PrismaClient, User } from '.prisma/client';
import { Request, Response } from 'express';

export type Context = {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  user: User;
};
