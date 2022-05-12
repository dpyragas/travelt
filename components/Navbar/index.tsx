import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const NavbarTw = styled.div`
  ${tw`
        flex
        h-20
        px-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
        `}
`;
const NavigationItems = tw.ul`
    list-none
    w-full
    h-auto
    
`;

const Navbar = () => {
  return <div>Navbar</div>;
};

export default Navbar;
