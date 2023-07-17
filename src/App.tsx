import { BrowserRouter } from "react-router-dom";
import { Approutes } from "./routes";

import { AppThemeProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components/"

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <Approutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

