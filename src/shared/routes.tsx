import * as React from "react";
import { Route } from "react-router-dom";
import { PlaygroundPedroComponent } from "./modules/playground-pedro";
import { PlaygroundAhmedComponent } from "./modules/playground-ahmed";
import { PlaygroundComponent } from "./modules/playground";
import { SingleWMDBPage } from "./pages/contact/single-wmdb-page.component";
import { FAQPageComponent } from "./pages/faq/faq-page";
import { HomePageComponent } from "./pages/home/home-page";
import { OverviewPageComponent } from "./pages/overview/overview.component";
import { HomepageComponent } from "./prep/pages-prep/homepage/homepage.component";
import { NotFoundPageComponent } from "./pages/not-found/not-found-page";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={HomePageComponent} />
    <Route exact path="/overzicht2" component={HomepageComponent} />

    <Route exact path="/overzicht/" component={OverviewPageComponent} />
    <Route exact path="/single-wmdb" component={SingleWMDBPage} />
    <Route exact path="/info-page" component={FAQPageComponent} />
    <Route exact path="/playground" component={PlaygroundComponent} />
    <Route exact path="/playground-ahmed" component={PlaygroundAhmedComponent} />
    <Route exact path="/playground-pedro" component={PlaygroundPedroComponent} />
    <Route exact path="/not-found" component={NotFoundPageComponent} />
    <Route path="*" component={NotFoundPageComponent} />
  </React.Fragment>
);

export { Routes };
