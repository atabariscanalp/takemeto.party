import { Arg, Args, ArgsType, Ctx, Field, ID, InputType, Mutation, Query, Resolver, Root } from "type-graphql";
import { User } from "../type-defs";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


@ArgsType()
class GetUserArgs {
    @Field(type => ID, { nullable: true })
    _id?: string

    @Field(type => String, { nullable: true })
    _email?: string

    @Field(type => String, { nullable: true })
    _googleId?: string

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
    async user(@Args() { _id, _email, _googleId }: GetUserArgs) {
        return await prisma.user.findUnique({
            where: {
                id: _id || undefined,
                email: _email || undefined,
                googleId: _googleId || undefined
            },
            include: {
                profile: false
            }
        })
    }

    @Query(() => [User])
    async users(@Ctx() ctx: any) {
        console.log("context", ctx)
        return await prisma.user.findMany()
    }

    @Mutation(() => User)
    async signupUser(@Arg("data") { username, email }: CreateUserInput) {
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email
            }
        })
        return user
    }
} 