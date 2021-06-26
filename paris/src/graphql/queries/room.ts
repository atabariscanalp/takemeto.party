import { gql } from "@apollo/client";

export const ROOMS = gql`
  query allRooms {
    rooms {
      id
      tag
      name
    }
  }
`;
