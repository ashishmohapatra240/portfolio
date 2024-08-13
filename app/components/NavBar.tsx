import React from "react";
import Button from "./Button";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full h-16 px-8 flex justify-between items-center bg-white">
      <div className="flex items-center gap-6">
        <div className="text-black text-4xl font-bold font-gilroy leading-9 letter-spacing-neg-6">
          am.
        </div>
        <Button className="bg-red-600/25 text-red-600 text-lg font-normal font-ibm-plex-mono leading-9 letter-spacing-neg-6">
          Alter Ego
        </Button>
      </div>
      <div className="flex items-center gap-10">
        <div className="text-black text-2xl font-bold leading-9 letter-spacing-neg-6">
          home
        </div>
        <div className="text-black text-2xl font-normal leading-9 letter-spacing-neg-6">
          works
        </div>
        <div className="text-black text-2xl font-normal leading-9 letter-spacing-neg-6">
          hall of fame
        </div>
        <div className="text-black text-2xl font-normal leading-9 letter-spacing-neg-6">
          about me.
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
