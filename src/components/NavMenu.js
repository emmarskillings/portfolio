import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import palette from "../theme/palette";

const NavMenu = (props) => {
  const { isVisible } = props;

  const location = window.location.pathname;

  return (
    <NavWrapper isVisible={isVisible}>
      <PageLink to="/" location={location}>Portfolio</PageLink>
      <PageLink to="/journal/" location={location}>Journal</PageLink>
      <PageLink to="/about-me/" location={location}>About</PageLink>
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
    opacity: 1;
    background: ${palette.fadedPrimary};
    visibility: visible;
  `}
`;

const PageLink = styled(Link)`
  font-size: 36px;
  width: 800px;
  text-align: center;
  display: block;
  position: relative;
  margin-bottom: 40px;
  text-decoration: none;
  color: ${palette.text};
  
  ${props => props.to === props.location && css`
    color: ${palette.accent1};
  `}
}
`;
