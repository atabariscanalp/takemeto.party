import React from "react";
import { LeftPanel, MidPanel, RightPanel } from "./Panels";
import { Header } from "../ui/Header";

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
}) => {
  return (
    <>
      <Header>{header}</Header>
      <LeftPanel>{leftPanel}</LeftPanel>
      <MidPanel>{midPanel}</MidPanel>
      <RightPanel>{rightPanel}</RightPanel>
    </>
  );
};
