import { Args, ArgsType, Field, ID, InputType, Mutation, Query, Resolver, Root } from "type-graphql";
import { User } from "../type-defs";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


@ArgsType()
class GetUserArgs {
    @Field(type => ID, { nullable: true })
    _id?: string
}

@InputType({ description: 'new user' })
class CreateUserInput implements Partial<User>{
    @Field()
    username: string

    @Field()
    email: string
}


@Resolver(User)
export class UserResolver {

    //returns null if not found
    @Query(() => User)
    async user(@Args() { _id }: GetUserArgs) {
        return await prisma.user.findUnique({
            where: {
                id: _id || undefined,
            },
            include: {
                profile: false
            }
        })
    }

    @Query(() => User)
    async me(@Root root) {
        
    }

    @Query(() => [User])
    async users() {
        return await prisma.user.findMany()
    }

    @Mutation(() => User)
    async signupUser(@Args() { username, email}: CreateUserInput) {

    }
} 