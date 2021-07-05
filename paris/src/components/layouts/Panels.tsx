import React from "react";

export const LeftPanel: React.FC = ({ children }) => {
  return <div className={"flex flex-col flex-1"}>{children}</div>;
};

export const RightPanel: React.FC = ({ children }) => {
  return <div className={"flex flex-col flex-1"}>{children}</div>;
};

export const MidPanel: React.FC = ({ children }) => {
  return <>{children}</>;
};

export const HeadPanel: React.FC = ({ children }) => {
  return (
    <header className={"flex w-full items-center mb-9 mt-5"}>{children}</header>
  );
};
