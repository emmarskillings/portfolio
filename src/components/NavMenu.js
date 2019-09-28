import React from 'react';
import styled, { css } from 'styled-components';

import palette from "../theme/palette";

const NavMenu = (props) => {
  const { isVisible } = props;
  return (
    <NavWrapper isVisible={isVisible}>
      <PageLink>Portfolio</PageLink>
      <PageLink>Journal</PageLink>
      <PageLink>About</PageLink>
    </NavWrapper>
  );
};

export default NavMenu;

const NavWrapper = styled.div`
  position: absolute;
  height: calc(100% - 100px);
  height: -o-calc(100% - 100px);
  height: -webkit-calc(100% - 100px);
  height: -moz-calc(100% - 100px);
  width: 100%;
  top: 100px;
  left: 0;
  background-color: ${palette.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  
  ${props => props.isVisible && css`
    opacity: 0.9;
    visibility: visible;
  `}
`;

const PageLink = styled.div`
  font-size: 36px;
  width: 800px;
  text-align: center;
  display: block;
  position: relative;
  margin-bottom: 40px;
`;
