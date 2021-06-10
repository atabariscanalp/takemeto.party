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
import { Profile } from "../type-defs";
import { Context } from "../utils/context";

@ArgsType()
class GetProfileArgs {
  @Field(() => ID, { nullable: true })
  _id?: string;

  @Field(() => ID, { nullable: true })
  _userId?: string;
}

@Resolver(Profile)
export class ProfileResolver {
  @Query(() => Profile)
  @UseMiddleware(isAuth)
  async profile(@Ctx() ctx: Context) {
    return await ctx.prisma.profile.findUnique({
      where: {
        userId: ctx.user.id,
      },
    });
  }

  //returns null if not found
  @Query(() => Profile)
  @UseMiddleware(isAuth)
  async profileById(
    @Args() { _id, _userId }: GetProfileArgs,
    @Ctx() ctx: Context
  ) {
    return await ctx.prisma.profile.findUnique({
      where: {
        id: _id || undefined,
        userId: _userId || undefined,
      },
    });
  }

  @Query(() => [Profile])
  @UseMiddleware(isAuth)
  async profiles(@Ctx() ctx: Context) {
    return await ctx.prisma.profile.findMany();
  }
}
