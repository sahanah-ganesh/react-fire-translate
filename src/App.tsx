import { Suspense, useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";
import { GlobalStyle } from "./theme/globalStyle";
import { StoreProvider } from "./core/store";
import { ViewportProvider } from "./hooks/useViewport";
import { LoadingLayout } from "./components/layout/LoadingLayout";
/* cra built upon webpack with support for code splitting
lazily load components with suspense while waiting for dynamic imports */
import Routes from "./core/routes";

declare global {
  interface Window {
    analytics: any;
  }
}

function _ScrollToTop(props: any) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    window.analytics.page(location.pathname);
  }, [location]);
}

function App() {
  usePageViews();
  return (
    <StoreProvider>
      <ViewportProvider>
        <GlobalStyle />
        <Suspense fallback={<LoadingLayout />}>
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </Suspense>
      </ViewportProvider>
    </StoreProvider>
  );
}

export default App;
