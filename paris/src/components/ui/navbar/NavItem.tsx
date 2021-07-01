import React, { ReactNode, useState } from "react";
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
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  link = "#",
  border = "none",
  children,
  className = "",
}) => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <li>
      <Link href={link}>
        <a
          className={`${borderClassNames[border]} mx-5 ${className}`}
          onClick={onClick}
        >
          {icon}
        </a>
      </Link>

      {clicked && children}
    </li>
  );
};
