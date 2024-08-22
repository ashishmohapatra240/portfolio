"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { MenuButton } from "./MenuButton";
import { useScroll } from "@/context/ScrollContext";

const NavBar: React.FC = () => {
  const [active, setActive] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { isScrolled, hideNav } = useScroll();
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
    <nav
      className={`w-full h-16 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hideNav ? "-translate-y-full" : "translate-y-0"
      } ${isScrolled ? "bg-white" : "bg-white"}`}
    >
      <div className="flex items-center gap-6">
        <div className="text-black text-4xl font-bold font-gilroy leading-8">
          am.
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <div
                className={`text-black text-2xl ${
                  active === item.name ? "font-bold" : "font-normal"
                } leading-8 tracking-tightest cursor-pointer`}
                onClick={() => setActive(item.name)}
              >
                <MenuButton>{item.label}</MenuButton>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center gap-8 relative">
          <Link
            href={menuItems.find((item) => item.name === active)?.path || "/"}
            passHref
          >
            <div
              className={`text-black text-2xl font-bold leading-8 tracking-tightest`}
            >
              {active}
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-black text-2xl font-normal leading-8 tracking-tightest"
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
                    <MenuButton>{item.label}</MenuButton>
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
