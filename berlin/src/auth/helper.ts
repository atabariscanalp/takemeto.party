import { PrismaClient, User } from ".prisma/client";

const prisma = new PrismaClient();

export async function UserFindOrCreate({
  id,
  given_name,
  email,
  avatar,
}: {
  id: string;
  given_name: string;
  email: string;
  avatar: string;
}): Promise<User> {
  const user = await prisma.user.findUnique({
    where: {
      googleId: id,
    },
  });

  if (!user) {
    const newUser = await prisma.user.create({
      data: {
        username: given_name,
        email: email,
        googleId: id,
        profile: {
          create: {
            avatar: avatar,
          },
        },
      },
    });

    return newUser;
  }
  return user;
}

export async function getUserFromId(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) return null;
  return user;
}
