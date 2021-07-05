import React from "react";
import Link from "next/link";
import { Vinyl } from "../../../icons";

export const HeaderLogo: React.FC = () => {
  return (
    <Link href={"/home"}>
      <a>{<Vinyl width={70} height={70} className={"ml-12"} />}</a>
    </Link>
  );
};
