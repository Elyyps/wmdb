import * as React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { SingleWMDBPage } from "./pages/simple-wmdb/single-wmdb-page.component";
import { FAQPageComponent } from "./pages/faq/faq-page";
import { HomePageComponent } from "./pages/home/home-page";
import { OverviewPageComponent } from "./pages/overview/overview.component";
import { NotFoundPageComponent } from "./pages/not-found/not-found-page";

const Routes: React.FunctionComponent = props => (
  <Switch>
    <Route exact path="/" component={HomePageComponent} />
    <Route exact path="/overzicht" component={OverviewPageComponent} />
    <Route exact path="/single-wmdb" component={SingleWMDBPage} />
    <Route exact path="/info-page" component={FAQPageComponent} />
    <Route exact path="/not-found" component={NotFoundPageComponent} />
    <Route path="*" render={() => <Redirect to="/not-found" />} />
  </Switch>
);

export { Routes };
