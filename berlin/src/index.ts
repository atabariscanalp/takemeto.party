import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { ProfileResolver, UserResolver } from './resolvers'

const PORT = process.env.PORT || 5000

const app = async () => {
    const schema = await tq.buildSchema({resolvers: [UserResolver, ProfileResolver]})

    const server = new ApolloServer({ 
        schema,
        context: {

        }
    })

    const { url } = await server.listen(PORT)
    console.log(`Server is running at ${url}`)
}

app()