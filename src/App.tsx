import { BrowserRouter } from "react-router-dom";
import { Approutes } from "./routes";

import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

