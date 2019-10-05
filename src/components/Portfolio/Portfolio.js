import React from 'react';

import Header from '../Header';
import CardWrapper from './CardWrapper';

const items = [
  {
    name: 'one',
    ordering: 1,
  },
  {
    name: 'two',
    ordering: 2,
  },
  {
    name: 'three',
    ordering: 3
  },
  {
    name: 'four',
    ordering: 4,
  },
  {
    name: 'five',
    ordering: 5,
  },
  {
    name: 'six',
    ordering: 6,
  },
];

const Portfolio = () => {
  return (
    <React.Fragment>
      <Header />
      <CardWrapper items={items} />
    </React.Fragment>
  )
};

export default Portfolio;
