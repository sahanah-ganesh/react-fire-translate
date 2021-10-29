import { lazy } from "react";
import { Switch, Route } from "react-router-dom";

/* cra built upon webpack with support for code splitting
lazily load components with suspense while waiting for dynamic imports */
const Home = lazy(() => import("../pages/home/Home"));
const Signin = lazy(() => import("../pages/signin/Signin"));

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  );
}

export default Routes;

export const RouteAuthenticated = (): JSX.Element => {
  return <></>;
};
