import React from "react";
import { RoomCard } from "./RoomCard";
import { Room } from "../../../graphql/types";

interface RoomsProps {
  rooms: [Room] | null;
}

export const Rooms: React.FC<RoomsProps> = ({ rooms }) => {
  return (
    <main className={"flex flex-col flex-3 m-2 p-1"}>
      <div className={"flex flex-col"}>
        {rooms?.map((room) => (
          <RoomCard room={room} key={room.id} />
        ))}
      </div>
    </main>
  );
};
