import { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useStore } from "./store";
import { SuspenseSpinner } from "../index";
/* cra built upon webpack with support for code splitting
lazily load components with suspense while waiting for dynamic imports */
const Landing = lazy(() => import("../pages/landing/Landing"));
const Signin = lazy(() => import("../pages/signin/Signin"));
const Languages = lazy(() => import("../pages/languages/Languages"));
const Keys = lazy(() => import("../pages/keys/Keys"));
interface Params {
  component: React.ComponentType;
  exact?: boolean;
  path: string;
  to: string;
}

export const Paths = {
  landing: "/welcome",
  signin: "/signin",
  languages: (platform: string) => `/${platform}/languages`,
  keys: (platform: string) => `/${platform}/keys`,
};

const RouteAuthenticated = ({
  component,
  exact = false,
  path,
  to,
}: Params): JSX.Element => {
  const { state } = useStore();

  if (!state.initialised) {
    return <Route render={() => <SuspenseSpinner />} />;
  }

  if (!state.user) {
    return <Redirect to={to} />;
  }

  return <Route component={component} exact={exact} path={path} />;
};

const RouteUnauthenticated = ({
  component,
  exact = false,
  path,
  to,
}: Params) => {
  const { state } = useStore();
  if (state.user) {
    return <Redirect to={to} />;
  }
  return <Route component={component} exact={exact} path={path} />;
};

export const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={Paths.landing} />
      <RouteAuthenticated
        component={Landing}
        exact
        path={Paths.landing}
        to={Paths.signin}
      />
      <RouteUnauthenticated
        component={Signin}
        path={Paths.signin}
        to={Paths.landing}
      />
      <RouteAuthenticated
        component={Languages}
        path={Paths.languages(":platform")}
        to={Paths.landing}
      />
      <RouteAuthenticated
        component={Keys}
        path={Paths.keys(":platform")}
        to={Paths.landing}
      />
    </Switch>
  );
};
