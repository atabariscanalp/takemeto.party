import "reflect-metadata"
import * as tp from 'type-graphql'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ProfileResolver, UserResolver } from "./resolvers"


(async () => {

    const PORT = process.env.PORT || 5000
    
    const app = express()

    const schema = await tp.buildSchema({ resolvers: [UserResolver, ProfileResolver]})

    const server = new ApolloServer({
        schema: schema
    })

    server.applyMiddleware({ app })

    app.listen(PORT, () => {
        console.log(`server started at http://localhost:${PORT}/graphql`)
    })
})()
