import React from "react";
import { Room } from "../../../graphql/types";
import Link from "next/link";

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }: { room: Room }) => {
  return (
    <Link href={`/room/${encodeURIComponent(room.id)}`}>
      <a
        className={
          "flex items-center w-full px-2.5 py-2 rounded-md bg-neutral-300"
        }
      >
        <div className={"flex items-center p-1 self-stretch"}>
          <span>{room.name}</span>
          <span className={"ml-1"}>{room.tag}</span>
        </div>
        <div className={"m-1"}>
          <span>{room.numPeopleInside}</span>
        </div>
      </a>
    </Link>
  );
};
