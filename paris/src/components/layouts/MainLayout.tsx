import React from "react";
import { HeadPanel, LeftPanel, MidPanel, RightPanel } from "./Panels";

interface MainLayoutProps {
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
  header?: React.ReactNode;
  midPanel?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  leftPanel,
  rightPanel,
  header,
  midPanel,
  children,
}) => {
  return (
    <div className={"flex w-full h-full flex-col"}>
      <HeadPanel>{header}</HeadPanel>
      {children}
      <div className={"flex w-full h-full"}>
        <LeftPanel>{leftPanel}</LeftPanel>
        <MidPanel>{midPanel}</MidPanel>
        <RightPanel>{rightPanel}</RightPanel>
      </div>
    </div>
  );
};
