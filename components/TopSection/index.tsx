import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopSectionContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        h-screen
        relative
    `}
`;
const TopSection = () => {
  return <TopSectionContainer>TopSection</TopSectionContainer>;
};

export default TopSection;
