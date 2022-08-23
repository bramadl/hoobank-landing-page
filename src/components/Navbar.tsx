import React, { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

type NavbarMenuProps = {
  isMobile: boolean;
};

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isMobile }) => {
  const baseNavbarMenuClass = "justify-end items-center gap-10 flex-1";
  const desktopNavbarMenuClass = `hidden sm:flex ${baseNavbarMenuClass}`;
  const mobileNavbarMenuClass = `flex flex-col ${baseNavbarMenuClass}`;

  return (
    <ul className={isMobile ? mobileNavbarMenuClass : desktopNavbarMenuClass}>
      {navLinks.map((navLink) => (
        <li
          key={navLink.id}
          className={`font-poppins font-normal text-[16px] text-white cursor-pointer`}
        >
          <a href={`#${navLink.id}`}>{navLink.title}</a>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="navbar w-full flex justify-between items-center py-6">
      <img alt="Logo" className="w-[124px] h-[32px]" src={logo} />

      <NavbarMenu isMobile={false} />

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          className="inline-flex items-center justify-center"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        >
          <img
            alt="Menu"
            className="w-[28px] h-[28px] object-contain"
            src={toggle ? close : menu}
          />
        </button>

        <div
          className={`sidebar absolute top-20 right-0 ${
            toggle ? "flex" : "hidden"
          } min-w-[140px] mx-4 my-2 p-6 bg-black-gradient rounded-xl`}
        >
          <NavbarMenu isMobile />
        </div>
      </div>
    </nav>
  );
};
