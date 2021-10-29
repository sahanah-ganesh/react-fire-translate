import { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useStore } from "./store";
import { SuspenseSpinner } from "../index";
/* cra built upon webpack with support for code splitting
lazily load components with suspense while waiting for dynamic imports */
const Home = lazy(() => import("../pages/home/Home"));
const Signin = lazy(() => import("../pages/signin/Signin"));

interface Params {
  component: React.ComponentType;
  exact?: boolean;
  path: string;
  to: string;
}

const Paths = {
  landing: "/welcome",
  signin: "/signin",
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
        component={Home}
        exact
        path={Paths.landing}
        to={Paths.signin}
      />
      <RouteUnauthenticated
        component={Signin}
        path={Paths.signin}
        to={Paths.landing}
      />
    </Switch>
  );
};
