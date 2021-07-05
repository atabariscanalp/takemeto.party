import React from "react";
import { initializeApollo } from "../../../graphql/apollo-client";
import { ROOMS } from "../../../graphql/queries/room";
import { Room } from "../../../graphql/types";
import { MainLayout } from "../../layouts/MainLayout";
import { Header } from "../../ui/headers/Header";
import { Rooms } from "../../ui/rooms/Rooms";
import { LeftSidebar } from "../../ui/sidebars/LeftSidebar";
import { RightSidebar } from "../../ui/sidebars/RightSidebar";

interface RoomsProps {
  rooms: [Room] | null;
}

const HomePage: React.FC<RoomsProps> = ({ rooms }) => {
  console.log("rooms", rooms);
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
  console.log("ctx", ctx);
  const cookie = ctx?.req?.headers?.cookie;

  console.log("cookie", cookie);

  const { data } = await client.query({
    query: ROOMS,
    context: {
      headers: {
        Cookie: cookie,
      },
    },
  });

  console.log("data", data);

  return {
    props: {
      rooms: data.rooms,
    },
  };
}

export default HomePage;
