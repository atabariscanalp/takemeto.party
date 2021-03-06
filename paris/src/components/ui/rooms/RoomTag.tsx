import React from "react";
import { Tag } from "../../../graphql/types";

interface RoomTagProps {
  tag: string;
  onClick?: (e) => void;
}

export const RoomTag: React.FC<RoomTagProps> = ({ tag, onClick }) => {
  const index = Object.keys(Tag).indexOf(tag);

  return (
    <div
      className={`safe flex items-center justify-center rounded-md ml-2 py-2 bg-tag-${
        index + 1
      } px-5 cursor-pointer`}
      onClick={onClick}
    >
      <span className={"uppercase font-semibold"}>{tag}</span>
    </div>
  );
};
