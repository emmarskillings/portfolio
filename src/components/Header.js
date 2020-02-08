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
        <Wrapper>
        Emma Skillings
        <HamburgerMenu isVisible={isVisible} toggleNavMenu={toggleNavMenu} />
        </Wrapper>
      </Header>
      <NavMenu isVisible={isVisible} toggleNavMenu={toggleNavMenu} />
    </React.Fragment>
  )
}

const Header = styled.header`
  font-size: 36px;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: white;
  top: 0;
  width: 100%;
  min-height: 80px;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
