import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background: #999};
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
    &:hover, &:focus {
    text-decoration: none;

    }
  }

  img {
    max-width: 100%;
  }

  .buttonDefault {
    font-size: 16px;
    text-transform: uppercase;
    padding: 3px 20px;
    border: 1px solid #000;
    border-radius: 25px;
    color: #000;
    font-weight: 500;
    text-align: center;
    transition: 0.3s;
    display: inline-block;
    @media (max-width: 992px) {
      margin: 20px auto;
      width: 120px;
      display: block;
    }
    &.red {
      color: #d0021b;
      border-color: #d0021b;
      &:hover {
        background: #d0021b;
        color: #fff;
        border-color: #d0021b;
      }
    }
    &.blue {
      color: #1973da;
      border-color: #1973da;
      &:hover {
        background: #1973da;
        color: #fff;
        border-color: #1973da;
      }
    }
    &.purple {
      color: #bd10e0;
      border-color: #bd10e0;
      &:hover {
        background: #bd10e0;
        color: #fff;
        border-color: #bd10e0;
      }
    }
    &.green {
      color: #7cbb37;
      border-color: #7cbb37;
      &:hover {
        background: #7cbb37;
        color: #fff;
        border-color: #7cbb37;
      }
    }
    &.yellow {
      color: #f5a623;
      border-color: #f5a623;
      &:hover {
        background: #f5a623;
        color: #fff;
        border-color: #f5a623;
      }
    }
    &:hover {
      border-color: #1973da;
      color: #1973da;
      text-decoration: none;
      
    }
  }
  .bth {
    text-align: center;
    margin: 0 auto;
    display: block;
    text-transform: uppercase;
    font-size: 20px;
    width: 150px;
  }
`;

export default GlobalStyle;
