import React from "react";
import { Tag } from "../../../graphql/types";

interface RoomTagProps {
  tag: string;
}

export const RoomTag: React.FC<RoomTagProps> = ({ tag }) => {
  const index = Object.keys(Tag).indexOf(tag);

  const tagColor = `bg-tag-${index + 1}`;

  return (
    <div
      className={`flex items-center justify-center rounded-md ml-2 py-2 px-5 ${tagColor}`}
    >
      <span className={"uppercase font-semibold"}>{tag}</span>
    </div>
  );
};
