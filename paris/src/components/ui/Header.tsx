import React from "react";

export const Header: React.FC = ({ children }) => {
  return <header className={"flex w-full items-center"}>{children}</header>;
};
