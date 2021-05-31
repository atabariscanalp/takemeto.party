import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";


@ObjectType({ description: 'the profile model' })
export class Profile {
    @Field(type => ID)
    id: string

    @Field({ nullable: true })
    bio?: string

    user: User
    
    @Field(type => ID)
    userId: string
}