import * as React from "react";
import { Route } from "react-router-dom";

import { HomepageComponent } from "@app/prep/pages-prep/homepage/homepage.component";
import { OverzichtComponent } from "@app/prep/pages-prep/overzicht/overzicht.component";
import { AgendaComponent } from "@app/prep/pages-prep/agenda/agenda.component";
import { SingleWmdbComponent } from "@app/prep/pages-prep/single-wmdb/single-wmdb.component";
import { AdverteerderWordenComponent } from "@app/prep/pages-prep/adverteerder-worden/adverteerder-worden.component";

const Routes: React.FunctionComponent = props => (
  <React.Fragment>
    <Route exact path="/" component={HomepageComponent} />
    <Route exact path="/overzicht" component={OverzichtComponent} />
    <Route exact path="/agenda" component={AgendaComponent} />
    <Route exact path="/single-wmdb" component={SingleWmdbComponent} />
    <Route exact path="/adverteerder-worden" component={AdverteerderWordenComponent} />
  </React.Fragment>
);

export { Routes };
