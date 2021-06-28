import { useRouter } from "next/router";
import React from "react";

export const RoomPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <span>id: {id}</span>;
};
