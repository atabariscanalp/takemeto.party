import React from "react";
import { Plus, Settings, Exit } from "../../../icons";
import { useModalContext } from "../../../utils/context";
import { NavItem } from "./NavItem";

export const Navbar: React.FC = () => {
  const { setIsOpen } = useModalContext();
  const openModal = () => setIsOpen(true);

  return (
    <nav className={"pr-5 pl-3"}>
      <ul className={"flex items-center w-full h-full justify-start"}>
        <NavItem
          icon={<Plus width={20} height={20} />}
          border={"outline"}
          onClick={openModal}
        />
        {/* <NavItem
          icon={<Settings width={35} height={35} />}
          className={"justify-self-end"}
          link={"/settings"}
        />
        <NavItem
          icon={<Exit width={35} height={35} />}
          className={"justify-self-end"}
          link={"/logout"}
        /> */}
      </ul>
    </nav>
  );
};
