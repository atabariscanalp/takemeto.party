import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
  mutation createRoom($addRoomArgs: AddRoomInput!) {
    createRoom(addRoomArgs: $addRoomArgs) {
      id
      name
      description
      isPrivate
      tag
    }
  }
`;
