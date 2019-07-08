import * as React from "react";
import { Route } from "react-router-dom";

import { PlaygroundContainer } from "@app/modules/playground";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={PlaygroundContainer} />
    <Route exact path="/playground" component={PlaygroundContainer} />
  </React.Fragment>
);

export { Routes };
