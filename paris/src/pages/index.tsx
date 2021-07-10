import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { USER } from "../graphql/queries/user";
import { Google as GoogleIcon } from "../icons";
import { Button } from "../components/ui/Button";

const LoginPage: React.FC = () => {
  const onClick = () => {
    window.location.href = "http://localhost:5000/auth/google";
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

export default LoginPage;
