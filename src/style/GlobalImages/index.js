import styled from "styled-components";
import greenHeart from '../../assets/green_heart.png'
import collapseArrow from '../../assets/collapse-arrow.png'

// This will be my base CSS style for all the images I will use, they will inherit from this Base and build upon it


export const DefaultAvaSmall = styled.img`
  cursor: pointer;
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0;
`;

export const DefaultAvaLarge = styled(DefaultAvaSmall)`
  height: 60px;
  width: 60px;
  border-radius: 3px;
  object-fit: contain;
  padding: 5px;
`;
export const WishHeartImg = styled.img`
  width: 50px;
  height: 50px;
  content: url(${greenHeart});
  cursor: pointer;
`;

export const CollapseArrow = styled.img`
  width: 32px;
  height: 32px;
  content: url(${collapseArrow});
  cursor: pointer;
  margin-left: 0.3rem;
`;