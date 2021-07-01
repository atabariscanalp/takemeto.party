import { useMutation } from "@apollo/client";
import React from "react";
import { CREATE_ROOM } from "../../../graphql/mutations/room";

export const LeftSidebar: React.FC = () => {
  const [createRoom, { data }] = useMutation(CREATE_ROOM);

  const create = () => {
    createRoom({
      variables: {
        name: "test1",
        description: "first room",
        tag: "POP",
        isPrivate: false,
      },
    });
  };

  return <></>;
};
