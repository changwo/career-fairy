import styled from "styled-components";


// This is an example case of storing a wrapper u would like to use on multiple different components

export const WishCardContainer = styled.div`
  margin-bottom: 10px;
  display: grid;
  padding: 1rem;
  grid-template-areas:
    "likeCount logo nameTime commentCount"
    "likeCount c c c"
    "comments comments comments comments";
  grid-template-columns: minmax(80px, 15%) 60px auto auto;
  grid-template-rows: minmax(60px, 5%) minmax(10px, auto) minmax(0, auto);
  border-radius: 5px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0,0,0,0.2);
  width: 100%;
  min-width: 375px;
  
  background-color: white;
`;