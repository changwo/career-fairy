import styled from "styled-components";
import greenHeart from '../../assets/green_heart.png'


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