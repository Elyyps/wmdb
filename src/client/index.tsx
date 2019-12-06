import React from "react";


import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { configureStore } from "../shared/stores";
import createHistory from "../shared/stores/history";
import "./index.scss";
import { IntlProviderContainer } from "@app/translations/intl-provider.container";
import { Routes } from "@app/routes";
const history = createHistory();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
  window.store ||
  configureStore({
    initialState: window.__PRELOADED_STATE__,
    history
  });

hydrate(
  <Provider store={store}>
    <Router>
      <IntlProviderContainer>
        <React.Fragment>
          <Routes />
        </React.Fragment>
      </IntlProviderContainer>
    </Router>
  </Provider>,
  document.getElementById("app")
);

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept();
  }

  if (!window.store) {
    window.store = store;
  }
}
