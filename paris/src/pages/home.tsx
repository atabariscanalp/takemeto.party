import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";
import { Header } from "../components/ui/Header";
import { Rooms } from "../components/ui/rooms/Rooms";
import { LeftSidebar } from "../components/ui/sidebars/LeftSidebar";
import { RightSidebar } from "../components/ui/sidebars/RightSidebar";
import { initializeApollo } from "../graphql/apollo-client";
import { ROOMS } from "../graphql/queries/room";
import { Room } from "../graphql/types";

interface RoomsProps {
  rooms: [Room];
}

const HomePage: React.FC<RoomsProps> = ({ rooms }) => {
  return (
    <MainLayout
      midPanel={<Rooms rooms={rooms} />}
      leftPanel={<LeftSidebar />}
      rightPanel={<RightSidebar />}
      header={<Header />}
    />
  );
};

export async function getServerSideProps(ctx) {
  const client = initializeApollo();
  const cookie = ctx?.req?.headers?.cookie;

  const { data } = await client.query({
    query: ROOMS,
    context: {
      headers: {
        Cookie: cookie,
      },
    },
  });

  return {
    props: {
      rooms: data.rooms,
    },
  };
}

export default HomePage;
