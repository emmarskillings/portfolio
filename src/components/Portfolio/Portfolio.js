import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import CardWrapper from './CardWrapper';
import { categories, items } from './PortfolioItems';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleSelectCategory = (event) => {
    const value = event.currentTarget.textContent

    if (selectedCategory && selectedCategory === value)  {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(value)
    }
  };

  return (
    <React.Fragment>
      <Filter>
        {categories.map(category => (
          <Category value={category} isSelected={selectedCategory} onClick={handleSelectCategory}>{category}</Category>
        ))}
      </Filter>
      <CardWrapper items={items} category={selectedCategory} />
      <Header />
    </React.Fragment>
  )
};

export default Portfolio;

const Filter = styled.div`
  height: 80px;
  width: 85%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
`;

const Category = styled.div`
  line-height: 40px;
  margin: 20px 10px;
  border-bottom: ${props => props.value === props.isSelected ? '2px solid #A6A2A2': ''};
`;
