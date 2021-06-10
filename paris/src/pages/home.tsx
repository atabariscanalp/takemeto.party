import React from "react";
import client from "../graphql/apollo-client";
import { gql } from "@apollo/client";

const Home = ({ user }) => {
  return (
    <>
      <h1>welcome to home bitch </h1>
      <p>
        {user.username} - {user.email}
      </p>
    </>
  );
};

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  const { data } = await client.query({
    query: gql`
      query me {
        me {
          username
          email
        }
      }
    `,
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
