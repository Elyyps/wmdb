import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateDummyNavbarData } from "@app/api/modules/nav-bar/generate-dummy-data";

import { generateDummyOverviewModule } from "@app/api/modules/overview";
import { FooterComponent } from "@app/modules/footer";
import { generateDummyFooterData } from "@app/api/modules/footer/generate-dummy-data";
import { HeaderSimpleComponent } from "@app/modules/header-simple";
import { generateDummyHeaderSimpleModule } from "@app/api/modules/header-simple/";
import { OtherLocationsComponent } from "@app/modules/other-locations";
import { generateOtherLocationsData } from "@app/api/modules/other-locations/end-point";
import { AboutPageComponent } from "@app/modules/about-page";
import { generateAboutPageData } from "@app/api/modules/about-page/end-point";
import { OverviewComponent } from "@app/modules/overview";
import style from "../pages.module.scss";

export interface IOverzichtComponentProps {}

const OverviewPageComponent = (props: IOverzichtComponentProps) => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={style["page"]}>
      <NavBarComponent navbarModule={generateDummyNavbarData()} />
      <HeaderSimpleComponent headerSimpleModule={generateDummyHeaderSimpleModule()} />
      <OverviewComponent overviewModule={generateDummyOverviewModule()} />
      <OtherLocationsComponent otherLocationsModule={generateOtherLocationsData()} />
      <AboutPageComponent aboutPageModule={generateAboutPageData()} />
      <div className={style["page-footer"]}>
        <FooterComponent footerModule={generateDummyFooterData()} />
      </div>
    </div>
  );
};

export { OverviewPageComponent };
