import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    background: var(--background);
    color: var(--white);
  }

  :root {
    --white: #fff;
    --black: #000;
    --background: #e91c5d;
  }
`;

export { GlobalStyles };
