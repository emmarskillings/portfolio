import React from 'react';
import styled, { css } from 'styled-components';

import palette from '../../theme/palette'

const ItemOverlay = ({ item, handleCloseOverlay }) => {
  return (
    <OverlayWrapper item={item}>
      {item &&
        <Overlay>
          <OverlayHeader>
            {item.name}
            <CloseOverlay onClick={handleCloseOverlay}>&#10005;</CloseOverlay>
          </OverlayHeader>
          <OverlayBody>
            <ImageWrapper>
              {item.images.map(image => (
                <Image image={image} />
              ))}
            </ImageWrapper>
          </OverlayBody>
        </Overlay>
      }
    </OverlayWrapper>
  );
};

export default ItemOverlay;

const OverlayWrapper = styled.div`
  position: fixed;
  height: calc(100% - 80px);
  height: -o-calc(100% - 80px);
  height: -webkit-calc(100% - 80px);
  height: -moz-calc(100% - 80px);
  width: 100%;
  top: 80px;
  left: 0;
  color: black;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  
  ${props => props.item && css`
    opacity: 1;
    background: rgb(0, 0, 0, 0.5);
    visibility: visible;
  `}
`;

const Overlay = styled.div`
  height: 80%;
  width: 70%;
  background-color: white;
  margin: auto;
  font-size: 24px;
`;

const OverlayHeader = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

const OverlayBody = styled.div`
  width: 90%;
  height: calc(100% - 75px);
  margin: auto;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Image = styled.div`
  height: 90%;
  background: no-repeat url('${props => props.image}');
  background-size: contain;
`;

const CloseOverlay = styled.div`
  font-size: 30px;
  line-height: 30px;
  cursor: pointer;
`;

// const OverlayWrapper = styled.div`
//   position: fixed;
//   height: 74%;
//   width: 70%;
//   top: 160px;
//   left: 50%;
//   margin-left: -35%;
//   transition: 0.5s;
//   -moz-transition: 0.5s;
//   -webkit-transition: 0.5s;
//   -o-transition: 0.5s;
//   -ms-transition: 0.5s;
//   opacity: 0;
//   visibility: hidden;
//
//   ${props => props.item && css`
//     opacity: 1;
//     background: white;
//     visibility: visible;
//   `}
// `;
