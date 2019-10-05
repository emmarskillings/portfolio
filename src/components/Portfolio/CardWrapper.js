import React from 'react';
import styled from 'styled-components';

import palette from "../../theme/palette";

const CardWrapper = (props) => {
  const { items } = props;

  return (
    <Wrapper>
    {items.map(item => (
      <Card>
        <Description index={item.ordering}>{item.name}</Description>
      </Card>
    ))}
    </Wrapper>
  )
} ;

export default CardWrapper;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: center;
`;

const Card = styled.div`
  width: 25%;
  height: 0;
  padding-bottom: 20%;
  background-color: white;
  display: inline-block;
  margin: 25px;
`;

const Description = styled.div`
  display: static;
  text-align: center;
  vertical-align: center;
  height: 0;
  padding-top: 30%;
  padding-bottom: 40%;
  margin: 5%;
  background-color: ${props => props.index % 2 === 0 ? palette.secondary : palette.tertiary};
  opacity: 0;
  transition: 0.5s;

  &:hover {
    opacity: 0.9;
  }
`;
