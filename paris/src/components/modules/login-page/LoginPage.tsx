import React from "react";
import { Button } from "../../ui/Button";
import GoogleIcon from "../../../icons";

export const LoginPage: React.FC = () => {
  const onClick = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

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
