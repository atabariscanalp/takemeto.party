import React from "react";

export const Header: React.FC = ({ children }) => {
  return (
    <header className={"flex w-full"}>
      <span className={"text-inverted"}>header</span>
    </header>
  );
};
