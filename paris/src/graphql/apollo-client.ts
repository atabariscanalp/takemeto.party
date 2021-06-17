import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  uri: "https://takemeto.party:5000/graphql",
});

export default client;
