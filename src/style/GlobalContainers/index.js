import styled from "styled-components";

export const WishContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-areas:
    "a nameTime .  dots"
    "c c c c"
    "i i i i"
    "like like commentCount likeCount"
    "comments comments comments comments";
  grid-template-columns: minmax(60px, 5%) minmax(150px, 1fr) 1fr minmax(
      60px,
      5%
    );
  grid-template-rows: minmax(60px, 5%) minmax(10px, auto) minmax(0, auto) minmax(
      60px,
      5%
    ) minmax(0, auto);
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 100%;
  min-width: 375px;

  background-color: white;
`;