import React from "react";

interface SearchBarProps {
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <form role={"search"}>
      <input
        type={"text"}
        placeholder={"Search for dj, music, room name, or tag"}
        className={`w-55 h-12 px-2.5 py-3.5 rounded-md focus:outline-none`}
        onChange={onSearch}
      />
    </form>
  );
};
