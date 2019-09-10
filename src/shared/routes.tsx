import * as React from "react";
import { Route } from "react-router-dom";

import { HomepageComponent } from "@app/prep/pages-prep/homepage/homepage.component";
import { OverzichtComponent } from "@app/prep/pages-prep/overzicht/overzicht.component";
import { SingleWmdkComponent } from "@app/prep/pages-prep/single-wmdk/single-wmdk.component";
import { InfoPageComponent } from "@app/prep/pages-prep/info-page/info-page.component";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={HomepageComponent} />
    <Route exact path="/overzicht" component={OverzichtComponent} />
    <Route exact path="/single-wmdk" component={SingleWmdkComponent} />
    <Route exact path="/info-page" component={InfoPageComponent} />
  </React.Fragment>
);

export { Routes };
