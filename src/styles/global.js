import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
  }

  ::-webkit-scrollbar-track {
    background: #dedede;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts.text};
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothin: grayscale;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;

    &:hover, &:focus {
      outline: none;
      border: none;
    }
  }



  input:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};

    &:hover, &:focus {
    text-decoration: none;

    }
  }

  img {
    max-width: 100%;
  }
`;
