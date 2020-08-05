import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    //font-family: 'Roboto', sans-serif;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    }
    button:focus {
    outline: 0;
    }
    body {
        background-color: #FFF;
    }
    
::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar
{
  width: 8px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

`;

export const defaultTheme = {
    filterTheme: "invert(48%) sepia(90%) saturate(7499%) hue-rotate(351deg) brightness(87%) contrast(135%)",
    white: "invert(99%) sepia(4%) saturate(449%) hue-rotate(272deg) brightness(118%) contrast(100%)",
    heartRed: "#E04F5F",
    fairyGreen: "#00d2aa"
};

