import styled from "styled-components";


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

export const BaseLabel = styled.label`
  padding: 10px 20px;
  background-color: ${props => props.theme.fairyGreen};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`