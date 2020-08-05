import styled from "styled-components";
import heart from "../../assets/heartSmall.png";

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
`;
export const WishHeartImg = styled.img`
  width: 22px;
  height: 22px;
  content: url(${heart});
  filter: ${(props) => props.theme.filterTheme};
  cursor: pointer;
`;