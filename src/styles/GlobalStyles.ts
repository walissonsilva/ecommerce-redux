import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: #f7f7f7;
  }

  body, button, input, select, option, textarea {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
