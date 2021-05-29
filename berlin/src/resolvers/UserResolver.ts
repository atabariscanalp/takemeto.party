import { Query, Resolver } from "type-graphql";
import { User } from "../type-defs";



@Resolver(User)
export class UserResolver {

    @Query(() => User)
    async user() {
        return 
    }
} 