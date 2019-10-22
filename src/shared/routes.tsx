import * as React from "react";
import { Route } from "react-router-dom";

import { PlaygroundComponent } from "./modules/playground";
import { SingleWMDBPage } from "./pages/simple-wmdb/single-wmdb-page.component";
import { FAQPageComponent } from "./pages/faq/faq-page";
import { HomePageComponent } from "./pages/home/home-page";
import { OverviewPageComponent } from "./pages/overview/overview.component";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={HomePageComponent} />
    <Route exact path="/overzicht" component={OverviewPageComponent} />
    <Route exact path="/single-wmdb" component={SingleWMDBPage} />
    <Route exact path="/info-page" component={FAQPageComponent} />
    <Route exact path="/playground" component={PlaygroundComponent} />
  </React.Fragment>
);

export { Routes };
