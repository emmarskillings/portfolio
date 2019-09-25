import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import NavMenu from './NavMenu';

const LandingPage = () => {
  const title = 'Landing Page'
  return (
    <React.Fragment>
      <Header />
      <NavMenu/>
      <div>HELLO</div>
    </React.Fragment>
  )
}

export default LandingPage;
