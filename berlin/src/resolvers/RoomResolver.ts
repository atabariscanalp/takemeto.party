import { Tag } from "@prisma/client";
import {
  Arg,
  Args,
  ArgsType,
  Ctx,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { Room } from "../type-defs";
import { Context } from "../utils/context";

@InputType({ description: "new room data" })
class AddRoomInput implements Partial<Room> {
  @Field(() => Tag)
  _tag: Tag;

  @Field()
  _name: string;

  @Field({ nullable: true })
  _description?: string;

  @Field()
  _isPrivate: boolean;

  @Field({ nullable: true })
  numPeopleInside?: number;
}

@Resolver(Room)
export class RoomResolver {
  @Query(() => [Room])
  @UseMiddleware(isAuth)
  async rooms(@Ctx() ctx: Context) {
    return await ctx.prisma.room.findMany();
  }

  @Query(() => Room)
  @UseMiddleware(isAuth)
  async room(@Ctx() ctx: Context, @Arg("id") _id: string) {
    return await ctx.prisma.room.findUnique({
      where: {
        id: _id,
      },
    });
  }

  @Mutation(() => Room)
  @UseMiddleware(isAuth)
  async createRoom(
    @Ctx() ctx: Context,
    @Args() { _tag, _name, _isPrivate, _description }: AddRoomInput
  ) {
    return await ctx.prisma.room.create({
      data: {
        name: _name,
        isPrivate: _isPrivate,
        description: _description,
        tag: _tag,
        creator: {
          connect: {
            id: ctx.user.id,
          },
        },
      },
    });
  }
}
