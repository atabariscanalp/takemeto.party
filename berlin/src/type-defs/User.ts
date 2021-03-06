import "reflect-metadata";
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { Profile } from "./Profile";

enum Role {
  USER,
  ADMIN,
}

registerEnumType(Role, {
  name: "Role",
  description: "defines the role of user(user or admin)",
});

@ObjectType({ description: "the user model" })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  username: string;

  role: Role;

  @Field({ nullable: true })
  profile?: Profile;

  @Field({ nullable: true })
  googleId?: string;
}
