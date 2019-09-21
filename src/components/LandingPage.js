import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const LandingPage = () => {
  const title = 'Landing Page'
  return (
    <React.Fragment>
      <Header />
      <div>{title}</div>
    </React.Fragment>
  )
}

export default LandingPage;
