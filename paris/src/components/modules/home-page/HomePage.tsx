import React from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { Header } from "../../ui/Header";
import { Rooms } from "../../ui/rooms/Rooms";
import { LeftSidebar } from "../../ui/sidebars/LeftSidebar";
import { RightSidebar } from "../../ui/sidebars/RightSidebar";

export const HomePage: React.FC = () => {
  return (
    <MainLayout
      midPanel={<Rooms />}
      leftPanel={<LeftSidebar />}
      rightPanel={<RightSidebar />}
      header={<Header />}
    />
  );
};
