import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";

const pokeAPIBetaLink = 'https://beta.pokeapi.co/graphql/v1beta';
const mazipanLink = 'https://graphql-pokeapi.vercel.app/api/graphql'

export const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "beta", // Routes the query to the proper client
    pokeAPIBetaLink,
    mazipanLink
  ),
  cache: new InMemoryCache(),
});
