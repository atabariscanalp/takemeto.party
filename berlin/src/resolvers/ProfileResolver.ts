import { Args, ArgsType, Field, ID, Query, Resolver } from "type-graphql";
import { Profile } from "../type-defs";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


@ArgsType()
class GetProfileArgs {
    @Field(type => ID, { nullable: true })
    _id?: string

    @Field(type => ID, { nullable: true})
    _userId?: string
}


@Resolver(Profile)
export class ProfileResolver {

    //returns null if not found
    @Query(() => Profile)
    async profile(@Args() { _id, _userId }: GetProfileArgs) {
        return await prisma.profile.findUnique({
            where: {
                id: _id || undefined,
                userId: _userId || undefined
            }
        })
    }

    @Query(() => [Profile])
    async profiles() {
        return await prisma.profile.findMany()
    }
} 