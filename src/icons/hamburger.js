import React from 'react';

import styled, { css } from 'styled-components';
import palette from "../theme/palette";

const LineOne = styled.span`
  display: block;
  width: 40px;
  height: 4px;
  background-color: ${palette.text};
  position: absolute;
  left: 0;
  transition: all 0.4s;
  -webkit-transition: all $transition-time;
  -moz-transition: all $transition-time;
`;

const LineTwo = styled(LineOne)`
  top: 50%;
`;

const LineThree = styled(LineOne)`
  top: 100%;
`;

const HamburgerWrapper = styled.a`
  width: 40px;
  height: 18px;
  position: absolute;
  right: 8vw;
  cursor: pointer;
  
  ${props => props.isVisible === true && css`
    ${LineOne} {
      transform: translateY(9px) translateX(0) rotate(45deg);
      -webkit-transform: translateY(9px) translateX(0) rotate(45deg);
      -moz-transform: translateY(9px) translateX(0) rotate(45deg);
    }
    ${LineTwo} {
      opacity: 0;
    }
    ${LineThree} {
      transform: translateY(-9px) translateX(0) rotate(-45deg);
      -webkit-transform: translateY(-9px) translateX(0) rotate(-45deg);
      -moz-transform: translateY(-9px) translateX(0) rotate(-45deg);
    }
  `}
`;

const HamburgerMenu = (props) => (
    <HamburgerWrapper onClick={props.toggleNavMenu} isVisible={props.isVisible}>
      <LineOne />
      <LineTwo />
      <LineThree />
    </HamburgerWrapper>
  );

export default HamburgerMenu;
