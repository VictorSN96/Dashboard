import { BrowserRouter } from "react-router-dom";
import { Approutes } from "./routes";

import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

