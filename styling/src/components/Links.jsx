import React from "react";
import { Link, LinkWrapper } from "./App.styled";

export const Links = () => {
  return (
    <LinkWrapper>
      <Link href="#" target="_blank">
        Link1
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link href="#" target="_blank">
        Link2
      </Link>
    </LinkWrapper>
  );
};
