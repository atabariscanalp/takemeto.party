import React from "react";

export const LeftPanel: React.FC = ({ children }) => {
  return <div className={"flex flex-col flex-grow"}>{children}</div>;
};

export const RightPanel: React.FC = ({ children }) => {
  return <div className={"flex flex-col flex-grow"}>{children}</div>;
};

export const MidPanel: React.FC = ({ children }) => {
  return <div className={"flex flex-col flex-grow"}>{children}</div>;
};
