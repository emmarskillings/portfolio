import React from 'react';
import styled from 'styled-components';

import palette from "../../theme/palette";

const CardWrapper = ({ items, category }) => {
  const filteredItems = [];

  items.forEach(item => {
    if (category && category === item.category) {
      filteredItems.push(item);
    } else if (!category) {
      filteredItems.push(item)
    }
  });
  console.log(filteredItems)

  return (
    <Wrapper>
      {filteredItems.map(item => {
        if (item.images) {
          return (
            <Card image={item.images[0]}>
              <Description key={item.ordering} index={item.ordering}>{item.name}</Description>
            </Card>
          )
        }
        }
      )}
    </Wrapper>
  );
}

export default CardWrapper;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

const Card = styled.div`
  width: 30%;
  height: 0;
  padding-bottom: 25%;
  background: no-repeat url('${props => props.image}');
  background-size: cover;
  display: inline-block;
  margin: 25px 0;
`;

const Description = styled.div`
  text-align: center;
  vertical-align: center;
  height: 0;
  padding-top: 33%;
  padding-bottom: 40%; 
  margin: 5%;
  background-color: ${props => props.index % 2 === 0 ? palette.secondary : palette.tertiary};
  opacity: 0;
  transition: 0.5s;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
