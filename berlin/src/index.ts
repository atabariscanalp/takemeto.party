import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'

const PORT = process.env.PORT || 5000

const app = async () => {
    const schema = await tq.buildSchema({})

    new ApolloServer({ schema }).listen({ port: PORT }, () => 
        console.log(`server listening at ${PORT}`))
}

app()