import { gql } from "@apollo/client";

export const USER = gql`
  query user {
    me {
      id
      username
      email
    }
  }
`;
