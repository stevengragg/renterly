"use client";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";

// components
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

type Props = {};

const UserMenu = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = React.useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <button
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-slate-200 transition"
          onClick={() => {}}
        >
          My Dashboard
        </button>
        <button
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border border-slate-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <span>
            <AiOutlineMenu />
          </span>
          <span className="hidden md:block">
            <Avatar />
          </span>
        </button>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
            border
            border-slate-300
          "
        >
          <div className="flex flex-col cursor-pointer">
            <MenuItem label="Login" onClick={() => {}} />
            <MenuItem label="Sign up" onClick={() => {}} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
