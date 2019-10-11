import * as React from "react";
import { Route } from "react-router-dom";
import { PlaygroundPedroComponent } from "./modules/playground-pedro";
import { PlaygroundAhmedComponent } from "./modules/playground-ahmed";
import { PlaygroundComponent } from "./modules/playground";
import { ContactPageComponent } from "./pages/contact/contact-page.component";
import { FAQPageComponent } from "./pages/faq/faq-page";
import { HomePageComponent } from "./pages/home/home-page";
import { OverviewPageComponent } from "./pages/overview/overview.component";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={HomePageComponent} />
    <Route exact path="/contact" component={ContactPageComponent} />
    <Route exact path="/overzicht" component={OverviewPageComponent} />
    <Route exact path="/single-wmdb" component={ContactPageComponent} />
    <Route exact path="/info-page" component={FAQPageComponent} />
    <Route exact path="/playground" component={PlaygroundComponent} />
    <Route exact path="/playground-ahmed" component={PlaygroundAhmedComponent} />
    <Route exact path="/playground-pedro" component={PlaygroundPedroComponent} />
  </React.Fragment>
);

export { Routes };
