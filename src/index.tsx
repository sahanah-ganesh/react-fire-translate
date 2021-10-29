import { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n/i18n";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { LoaderSpinner } from "./components/loading/LoaderSpinner";

export const SuspenseSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "30%",
    }}
  >
    <LoaderSpinner />
  </div>
);

ReactDOM.render(
  <Suspense fallback={<SuspenseSpinner />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
