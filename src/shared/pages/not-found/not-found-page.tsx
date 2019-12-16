import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { NotFoundComponent } from "@app/modules/not-found";

const NotFoundPageComponent = () => (
  <div style={{ position: "absolute", width: "100%" }}>
    <NavBarComponent navbarModule={generateNavbarData()} />
    <NotFoundComponent />
    <div style={{ position: "relative", bottom: "0" }}>
      <FooterComponent footerModule={generateFooterData()} />
    </div>
  </div>
);
export { NotFoundPageComponent };
