import React from 'react';
import styled from 'styled-components';

import palette from '../theme/palette';

export default () => {
  return (
    <Header>
      <Title>Emma</Title>
      <MenuIcon>&#x2630;</MenuIcon>
    </Header>
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

const MenuIcon = styled.div`
  margin-right: 100px;
`;
