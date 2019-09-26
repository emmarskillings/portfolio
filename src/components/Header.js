import React from 'react';
import styled from 'styled-components';

import palette from '../theme/palette';
import NavMenu from "./NavMenu";

export default () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <React.Fragment>
      <Header>
        <Title>Emma</Title>
        <MenuIcon onClick={handleClick}>&#x2630;</MenuIcon>
      </Header>
      <NavMenu isVisible={isVisible}/>
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
  margin-left: 100px;
`;

const MenuIcon = styled.button`
  margin-right: 100px;
  border: none;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  font-size: 36px;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  &:focus {
    outline: none;
  }
`;
