import React from "react";
import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import theme from "./constants/theme";
import GlobalState from "./global/GlobalState";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalState>
          <Router />
        </GlobalState>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
