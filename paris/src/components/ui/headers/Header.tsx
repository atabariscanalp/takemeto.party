import React from "react";
import { SearchBar } from "../SearchBar";
import { HeaderLogo } from "./HeaderLogo";
import { Navbar } from "../navbar/NavBar";

interface HeaderProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <>
      <div className={"flex-1"}>{<HeaderLogo />}</div>
      <div className={"flex-3 flex justify-center"}>
        {<SearchBar onSearch={onSearch} />}
      </div>
      <div className={"flex-1"}>{<Navbar />}</div>
    </>
  );
};
