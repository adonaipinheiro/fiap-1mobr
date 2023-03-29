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

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.125rem;
  }

  body {
    background: var(--background);
    color: var(--white);
  }

  button, a {
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  :root {
    --white: #fff;
    --black: #000;
    --background: #e91c5d;
    --background-dark: #ba1247;
  }
`;

export { GlobalStyles };
