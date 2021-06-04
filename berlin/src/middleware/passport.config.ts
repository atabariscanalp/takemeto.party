import GoogleStrategy from 'passport-google-oauth20';
import { randomInt } from 'crypto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Strategy = new GoogleStrategy.Strategy(
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
);
