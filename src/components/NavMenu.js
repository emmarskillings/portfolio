import React from 'react';
import styled, { css } from 'styled-components';

import palette from "../theme/palette";

const NavMenu = (isVisible) => {
  console.log(isVisible);
  return (
  <NavWrapper isVisible={isVisible}>
    <PageLink>Portfolio</PageLink>
    <PageLink>Journal</PageLink>
    <PageLink>About</PageLink>
  </NavWrapper>
)};

export default NavMenu;

const NavWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${palette.primary};
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ${props => props.isVisible === true && css`
    visibility: hidden;
  `}
`;

const PageLink = styled.div`
  font-size: 36px;
  width: 800px;
  text-align: center;
  display: block;
  position: relative;
  margin: 20px 0;
`;
