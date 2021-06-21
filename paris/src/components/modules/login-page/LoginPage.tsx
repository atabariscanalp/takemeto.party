import React, { useEffect } from "react";
import { Button } from "../../ui/Button";
import GoogleIcon from "../../../icons";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { USER } from "../../../graphql/queries/user";

const SERVER_ROOT = "takemeto.party";

export const LoginPage: React.FC = () => {
  const onClick = () => {
    window.location.href = `https://${SERVER_ROOT}/api/auth/google`;
  };

  const router = useRouter();
  const { data } = useQuery(USER);
  useEffect(() => {
    if (data) router.push("/home");
  });

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <Button
        icon={<GoogleIcon width={32} height={32} />}
        color={"outline"}
        className={"border-2"}
        id={"google-btn"}
        onClick={onClick}
      >
        Sign in with Google
      </Button>
    </div>
  );
};
