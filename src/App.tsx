import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./theme/globalStyle";
import { StoreProvider } from "./core/store";
import { ViewportProvider } from "./hooks/useViewport";
import { Routes } from "./core/routes";
/* cra built upon webpack with support for code splitting
lazily load components with suspense while waiting for dynamic imports */

declare global {
  interface Window {
    analytics: any;
  }
}

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <ViewportProvider>
          <GlobalStyle />
          <Routes />
        </ViewportProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
