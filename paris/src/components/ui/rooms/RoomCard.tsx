import React from "react";
import { Room } from "../../../graphql/types";
import Link from "next/link";

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }: { room: Room }) => {
  return (
    <Link href={`room/${encodeURIComponent(room.id)}`}>
      <a>
        <div className={"flex items-center justify-between"}>
          <div className={"flex items-center p-1"}>
            <span>{room.name}</span>
            <span className={"ml-1"}>{room.tag}</span>
          </div>
          <div className={"p-1"}>
            <span>{room.numPeopleInside}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};
