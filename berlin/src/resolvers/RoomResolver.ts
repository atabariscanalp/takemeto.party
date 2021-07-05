import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { Room, Tag } from "../type-defs";
import { Context } from "../utils/context";

@InputType({ description: "new room data" })
class AddRoomInput implements Partial<Room> {
  @Field(() => Tag)
  _tag: keyof typeof Tag;

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
    @Arg("addRoomArgs")
    { _tag, _name, _isPrivate, _description }: AddRoomInput
  ) {
    console.log("tag", _tag);
    console.log("tag", _name);
    console.log("tag", _isPrivate);
    console.log("tag", _description);
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

  @Mutation(() => Room)
  @UseMiddleware(isAuth)
  async deleteRoom(@Ctx() ctx: Context, @Arg("id") _id: string) {
    return await ctx.prisma.room.delete({
      where: {
        id: _id,
      },
    });
  }
}
