import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { NotFoundComponent } from "@app/modules/not-found";

const NotFoundPageComponent = () => (
  <React.Fragment>
    <NavBarComponent navbarModule={generateNavbarData()} />
    <NotFoundComponent />
    <FooterComponent footerModule={generateFooterData()} />
  </React.Fragment>
);
export { NotFoundPageComponent };
