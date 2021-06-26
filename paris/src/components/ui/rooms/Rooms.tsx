import React from "react";
import { initializeApollo } from "../../../graphql/apollo-client";
import { ROOMS } from "../../../graphql/queries/room";
import { RoomCard } from "./RoomCard";
import { Room } from "../../../graphql/types";

interface RoomsProps {
  rooms: [Room];
}

export const Rooms: React.FC<RoomsProps> = ({ rooms }: { rooms: [Room] }) => {
  return (
    <main className={"flex flex-col m-2 p-1"}>
      <div className={"flex flex-col"}>
        {rooms.map((room) => (
          <RoomCard room={room} />
        ))}
      </div>
    </main>
  );
};

export async function getStaticProps(ctx) {
  const client = initializeApollo();
  const cookie = ctx?.req?.headers?.cookie;

  const { data } = await client.query({
    query: ROOMS,
    context: {
      headers: {
        Cookie: cookie,
      },
    },
  });

  return {
    props: {
      rooms: data.rooms,
    },
  };
}
