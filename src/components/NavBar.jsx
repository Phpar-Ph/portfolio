import React from "react";
import { NavLink } from "react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";
const NavMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const activeLink = " text-bgCTA/80  hover:text-bgCTA";
const inactiveLink = "hover:text-bgCTA";

const NavBar = () => {
  return (
    <div className="h-20 w-full text-textPrimary bg-transparent text-2xl font-bold fixed top-0 ">
      <div className="container flex justify-between mx-auto items-center h-20">
        <div>
          <h1 className="flex items-center font-extrabold">
            <ChevronLeft className="text-bgCTA " size={40} />
            <NavLink to="/">Portfolio</NavLink>
            <ChevronRight className="text-bgCTA" size={40} />
          </h1>
        </div>
        <div className="flex  space-x-8">
          {NavMenu.map((menu, i) => (
            <NavLink
              key={i}
              to={menu.path}
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {menu.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
