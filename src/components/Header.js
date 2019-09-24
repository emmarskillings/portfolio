import React from 'react';
import styled from 'styled-components';

import palette from '../theme/palette';

export default () => {
  return (
    <Header>
      <div>Hello</div>
        <div>&#x2630;</div>
    </Header>
  )
}


const Header = styled.header`
  background-color: ${palette.tertiary};
  font-size: 1.2em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  width: 100%;
  min-height: 60px;
`;
