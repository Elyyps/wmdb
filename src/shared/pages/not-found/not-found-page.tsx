import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { NotFoundComponent } from "@app/modules/not-found";
import style from "../pages.module.scss";
const NotFoundPageComponent = () => (
  <div className={style["page"]}>
    <NavBarComponent navbarModule={generateNavbarData()} />
    <NotFoundComponent />
    <div className={style["page-footer"]}>
      <FooterComponent footerModule={generateFooterData()} />
    </div>
  </div>
);
export { NotFoundPageComponent };
