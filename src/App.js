import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
