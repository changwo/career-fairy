import styled from "styled-components";


// This will be my base CSS style for all the buttons I will use, they will inherit from this Base and build upon it


export const BaseButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.fairyGreen};
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
    border: 1px solid ${props => props.theme.fairyGreen};
    :hover,:focus{
    background-color: white;
    color:${props => props.theme.fairyGreen};
  }
`