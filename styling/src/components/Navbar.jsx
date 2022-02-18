import React from "react";
import { MainWrapper } from "./App.styled";
import { Links } from "./Links";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <MainWrapper>
      <Logo />
      <Links />
    </MainWrapper>
  );
};
