"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const NavBar: React.FC = () => {
  const [active, setActive] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuItems = [
    { name: "home", label: "home", path: "/" },
    { name: "works", label: "works", path: "/works" },
    { name: "hall of fame", label: "hall of fame", path: "/hall-of-fame" },
    { name: "about me", label: "about me.", path: "/about-me" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const filteredMenuItems = menuItems.filter((item) => item.name !== active);

  return (
    <nav className="w-full h-16 px-8 flex justify-between items-center relative">
      <div className="flex items-center gap-6">
        <div className="text-black text-4xl font-bold font-gilroy leading-9">
          am.
        </div>
        <Button className="bg-red-600/25 text-red-600 text-lg font-normal font-ibm-plex-mono leading-9 whitespace-nowrap">
          Alter Ego
        </Button>
      </div>
      <div className="flex items-center gap-10">
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <div
                className={`text-black text-2xl ${
                  active === item.name ? "font-bold" : "font-normal"
                } leading-9 tracking-tightest cursor-pointer`}
                onClick={() => setActive(item.name)}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center gap-8 relative">
          
          <Link
            href={menuItems.find((item) => item.name === active)?.path || "/"}
            passHref
          >
            <div className={`text-black text-2xl font-bold leading-9 tracking-tightest`}>
              {active}
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-black text-2xl font-normal leading-9 tracking-tightest"
          >
            menu
          </button>
          {menuOpen && (
            <div className="absolute top-full right-0 bg-white shadow-md mt-2 py-2 w-48 z-50">
              {filteredMenuItems.map((item) => (
                <Link key={item.name} href={item.path} passHref>
                  <div
                    className="text-black text-xl font-normal px-4 py-2 hover:bg-gray-100 tracking-tightest cursor-pointer"
                    onClick={() => {
                      setActive(item.name);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
