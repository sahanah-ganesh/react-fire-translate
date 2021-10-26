import { Suspense, useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";
import { GlobalStyle } from "./theme/globalStyle";
import { ViewportProvider } from "./hooks/useViewport";
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
    <ViewportProvider>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Suspense>
    </ViewportProvider>
  );
}

export default App;
