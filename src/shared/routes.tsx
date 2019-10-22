import * as React from "react";
import { Route } from "react-router-dom";
import { SingleWMDBPage } from "./pages/simple-wmdb/single-wmdb-page.component";
import { FAQPageComponent } from "./pages/faq/faq-page";
import { HomePageComponent } from "./pages/home/home-page";
import { OverviewPageComponent } from "./pages/overview/overview.component";
import { NotFoundPageComponent } from "./pages/not-found/not-found-page";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={HomePageComponent} />
    <Route exact path="/overzicht" component={OverviewPageComponent} />
    <Route exact path="/single-wmdb" component={SingleWMDBPage} />
    <Route exact path="/info-page" component={FAQPageComponent} />
    <Route exact path="/not-found" component={NotFoundPageComponent} />
    <Route path="*" component={NotFoundPageComponent} />
  </React.Fragment>
);

export { Routes };
