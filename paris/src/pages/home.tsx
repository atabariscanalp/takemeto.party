import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";
import { Header } from "../components/ui/headers/Header";
import { Modal } from "../components/ui/Modal";
import { CreateRoomModal } from "../components/ui/modal-contents/CreateRoomModal";
import { Rooms } from "../components/ui/rooms/Rooms";
import { LeftSidebar } from "../components/ui/sidebars/LeftSidebar";
import { RightSidebar } from "../components/ui/sidebars/RightSidebar";
import { initializeApollo } from "../graphql/apollo-client";
import { ROOMS } from "../graphql/queries/room";
import { Room } from "../graphql/types";
import { ModalProvider } from "../utils/context";

interface HomePageProps {
  rooms: [Room];
}

const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  console.log(e.target.value);
};

const HomePage: React.FC<HomePageProps> = ({ rooms }) => {
  return (
    <ModalProvider>
      <MainLayout
        midPanel={<Rooms rooms={rooms} />}
        leftPanel={<LeftSidebar />}
        rightPanel={<RightSidebar />}
        header={<Header onSearch={onSearch} />}
      >
        {
          <Modal>
            <CreateRoomModal />
          </Modal>
        }
      </MainLayout>
    </ModalProvider>
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

  if (!cookie) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      rooms: data.rooms,
    },
  };
}

export default HomePage;
