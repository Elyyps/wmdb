import * as React from "react";
import { Route } from "react-router-dom";

import { HomepageComponent } from "@app/prep/pages-prep/homepage/homepage.component";
import { OverzichtComponent } from "@app/prep/pages-prep/overzicht/overzicht.component";
import { SingleWmdbComponent } from "@app/prep/pages-prep/single-wmdb/single-wmdb.component";
import { InfoPageComponent } from "@app/prep/pages-prep/info-page/info-page.component";
import { PlaygroundPedroComponent } from "./modules/playground-pedro";
import { PlaygroundAhmedComponent } from "./modules/playground-ahmed";
import { PlaygroundComponent } from "./modules/playground";
import { ContactPageComponent } from "./pages/contact/contact-page.component";
import { FAQPageComponent } from "./pages/faq/faq-page";
import { HomePageComponent } from "./pages/home/home-page";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={HomepageComponent} />
    <Route exact path="/contact" component={ContactPageComponent} />
    <Route exact path="/faq" component={FAQPageComponent} />
    <Route exact path="/home" component={HomePageComponent} />

    <Route exact path="/overzicht" component={OverzichtComponent} />
    <Route exact path="/single-wmdb" component={SingleWmdbComponent} />
    <Route exact path="/info-page" component={InfoPageComponent} />
    <Route exact path="/playground" component={PlaygroundComponent} />
    <Route exact path="/playground-ahmed" component={PlaygroundAhmedComponent} />
    <Route exact path="/playground-pedro" component={PlaygroundPedroComponent} />
  </React.Fragment>
);

export { Routes };
