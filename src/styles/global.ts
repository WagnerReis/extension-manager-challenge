import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input { 
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.shadows.small};
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
