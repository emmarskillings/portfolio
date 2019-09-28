import React from 'react';
import styled from 'styled-components';

import NavMenu from "./NavMenu";
import HamburgerMenu from "../icons/hamburger";

export default () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleNavMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <React.Fragment>
      <Header>
        <Title>Emma</Title>
        <HamburgerMenu isVisible={isVisible} toggleNavMenu={toggleNavMenu} />
      </Header>
      <NavMenu isVisible={isVisible} toggleNavMenu={toggleNavMenu} />
    </React.Fragment>
  )
}

const Header = styled.header`
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100px;
`;

const Title = styled.div`
  margin-left: 8vw;
`;
