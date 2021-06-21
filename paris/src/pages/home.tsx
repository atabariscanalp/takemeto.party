import React from "react";
import { initializeApollo } from "../graphql/apollo-client";
import { USER } from "../graphql/queries/user";

const Home = ({ user }) => {
  return (
    <div className={"flex items-center justify-center w-full h-full"}>
      <span className={"text-inverted"}>
        welcome to home bitch {user.username} - {user.email}
      </span>
    </div>
  );
};

export async function getServerSideProps(context) {
  const client = initializeApollo();

  const cookie = context.req.headers.cookie;
  const { data } = await client.query({
    query: USER,
    context: {
      headers: {
        Cookie: cookie,
      },
    },
  });

  return {
    props: {
      user: data.me,
    },
  };
}

export default Home;
