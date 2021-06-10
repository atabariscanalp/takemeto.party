import {
  Args,
  ArgsType,
  Ctx,
  Field,
  ID,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { User } from "../type-defs";
import { Context } from "../utils/context";

@ArgsType()
class GetUserArgs {
  @Field(() => ID, { nullable: true })
  _id?: string;

  @Field({ nullable: true })
  _email?: string;

  @Field({ nullable: true })
  _googleId?: string;
}

@Resolver(User)
export class UserResolver {
  @Query(() => User)
  @UseMiddleware(isAuth)
  async me(@Ctx() ctx: Context) {
    return ctx.user;
  }

  //returns null if not found
  @Query(() => User)
  @UseMiddleware(isAuth)
  async user(
    @Args() { _id, _email, _googleId }: GetUserArgs,
    @Ctx() ctx: Context
  ) {
    return await ctx.prisma.user.findUnique({
      where: {
        id: _id || undefined,
        email: _email || undefined,
        googleId: _googleId || undefined,
      },
      include: {
        profile: false,
      },
    });
  }

  @Query(() => [User])
  @UseMiddleware(isAuth)
  async users(@Ctx() ctx: Context) {
    return await ctx.prisma.user.findMany();
  }
}
