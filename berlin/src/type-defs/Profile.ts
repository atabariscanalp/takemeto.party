import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType({ description: "the profile model" })
export class Profile {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  bio?: string;

  @Field()
  avatar: string;

  user: User;

  @Field(() => ID)
  userId: string;
}
