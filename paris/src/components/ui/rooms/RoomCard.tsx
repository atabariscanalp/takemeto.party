import React from "react";
import { Room } from "../../../graphql/types";
import Link from "next/link";
import { RoomTag } from "./RoomTag";

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }: { room: Room }) => {
  return (
    <Link href={`/room/${encodeURIComponent(room.id)}`}>
      <a
        className={
          "flex items-center w-full px-2.5 py-2 rounded-md bg-neutral-300 justify-between"
        }
      >
        <div className={"flex items-center p-1 self-stretch"}>
          <span>{room.name}</span>
          <RoomTag tag={room.tag} />
        </div>
        <div className={"m-1"}>
          <span>{room.numPeopleInside} listener/s</span>
        </div>
      </a>
    </Link>
  );
};
