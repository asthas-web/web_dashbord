import React from "react";
import styled from "styled-components";
import Leftmenu from "./leftMenu";
import RightMenu from "./rightMenu";
const Header = () => {
  return (
    <NavbarDiv>
      <NavContainer>
        <Leftmenu />
        <RightMenu />
      </NavContainer>
    </NavbarDiv>
  );
};

const NavbarDiv = styled.div`
  width: 100%;
  background-color: #2f2d2d;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Header;
