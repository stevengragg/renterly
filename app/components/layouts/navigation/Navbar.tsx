import React from "react";
// components
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <div className="flex flex-row items-center gap-1">
              <Search />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
