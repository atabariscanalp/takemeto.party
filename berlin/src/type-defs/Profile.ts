import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";


@ObjectType({ description: 'the profile model' })
export class Profile {
    @Field(type => ID)
    id: String

    @Field({ nullable: true })
    bio: String | null

    @Field(type => User)
    user: User
    
    userId: number
}