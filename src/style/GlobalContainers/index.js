import styled from "styled-components";

export const WishCardContainer = styled.div`
  margin-top: 10px;
  display: grid;
  padding: 1rem;
  grid-template-areas:
    "logo nameTime .  commentCount"
    "c c c c"
    "i i i i"
    "like like like likeCount"
    "comments comments comments comments";
  grid-template-columns: minmax(60px, 5%) minmax(150px, 1fr) 1fr minmax(
      80px,
      5%
    );
  grid-template-rows: minmax(60px, 5%) minmax(10px, auto) minmax(0, auto) minmax(
      60px,
      5%
    ) minmax(0, auto);
  border-radius: 5px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0,0,0,0.2);
  width: 100%;
  min-width: 375px;

  background-color: white;
`;