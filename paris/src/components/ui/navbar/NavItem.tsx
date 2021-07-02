import React, { ReactNode } from "react";
import Link from "next/link";

const borderClassNames = {
  none: "",
  outline:
    "bg-transparent border-tag-17 p-3 flex items-center justify-center border-2 rounded-md",
};

interface NavItemProps {
  icon: ReactNode;
  link?: string;
  border?: keyof typeof borderClassNames;
  className?: string;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  link = "/home",
  border = "none",
  children,
  className = "",
  onClick = null,
}) => {
  return (
    //TODO: reconfigure
    <li>
      {/* <Link href={link}>
        <a
          className={`${borderClassNames[border]} mx-5 ${className}`}
          onClick={() => onClick()}
        >
          {icon}
        </a>
      </Link> */}
      <button
        className={`${borderClassNames[border]} mx-5 ${className}`}
        onClick={onClick}
      >
        {icon}
      </button>
    </li>
  );
};
