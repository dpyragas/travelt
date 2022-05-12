import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const LogoTw = styled.div`
  ${tw`
        font-family["Jost"]
        font-black
        text-2xl
        text-white
    `}
`;

const Logo = () => {
  return <LogoTw>TraveLT</LogoTw>;
};

export default Logo;
