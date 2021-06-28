import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
  mutation createRoom(
    $name: String!
    $description: String
    $isPrivate: Boolean!
    $tag: Tag!
    $numPeopleInside: Number!
  ) {
    createRoom(
      name: $name
      description: $description
      isPrivate: $isPrivate
      tag: $tag
      numPeopleInside: $numPeopleInside
    ) {
      id
      name
      description
      isPrivate
      tag
      numPeopleInside
    }
  }
`;
