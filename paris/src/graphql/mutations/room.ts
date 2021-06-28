import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
  mutation createRoom(
    $name: String!
    $description: String
    $isPrivate: Boolean!
    $tag: Tag!
  ) {
    createRoom(
      name: $name
      description: $description
      isPrivate: $isPrivate
      tag: $tag
    ) {
      id
      name
      description
      isPrivate
      tag
    }
  }
`;
