import "reflect-metadata";
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { User } from "./User";

export enum Tag {
  POP = "POP",
  RAP = "RAP",
  JAZZ = "JAZZ",
  CLASSICAL = "CLASSICAL",
  HIPHOP = "HIPHOP",
  ELECTRONIC = "ELECTRONIC",
  INDIE = "INDIE",
  KPOP = "KPOP",
  RB = "RB",
  BLUES = "BLUES",
  METAL = "METAL",
  FUNK = "FUNK",
  LATIN = "LATIN",
  ARAB = "ARAB",
  ACOUSTIC = "ACOUSTIC",
  PUNK = "PUNK",
  ROCK = "ROCK",
  MIX = "MIX",
}

registerEnumType(Tag, {
  name: "Tag",
  description: "music genres",
});

@ObjectType({ description: "the room model" })
export class Room {
  @Field(() => ID)
  id: string;

  @Field(() => Tag)
  tag: keyof typeof Tag;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  isPrivate: boolean;

  @Field()
  numPeopleInside: number;

  @Field(() => User)
  creator: User;

  @Field(() => ID)
  creatorId: string;
}
