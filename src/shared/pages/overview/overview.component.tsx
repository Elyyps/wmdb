import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateDummyNavbarData } from "@app/api/modules/nav-bar/generate-dummy-data";
import { OverviewComponent } from "@app/modules/overview";
import { generateDummyOverviewModule } from "@app/api/modules/overview";
import { FooterComponent } from "@app/modules/footer";
import { generateDummyFooterData } from "@app/api/modules/footer/generate-dummy-data";
import { HeaderSimpleComponent } from "@app/modules/header-simple";
import { generateDummyHeaderSimpleModule } from "@app/api/modules/header-simple/";
import { OtherLocationsComponent } from "@app/modules/other-locations";
import { generateOtherLocationsData } from "@app/api/modules/other-locations/end-point";
import { AboutPageComponent } from "@app/modules/about-page";
import { generateAboutPageData } from "@app/api/modules/about-page/end-point";

export interface IOverzichtComponentProps {}

const OverviewPageComponent = (props: IOverzichtComponentProps) => (
  <div>
    <NavBarComponent navbarModule={generateDummyNavbarData()} />
    <HeaderSimpleComponent headerSimpleModule={generateDummyHeaderSimpleModule()} />
    <OverviewComponent overviewModule={generateDummyOverviewModule()} />
    <OtherLocationsComponent otherLocationsModule={generateOtherLocationsData()} />
    <AboutPageComponent aboutPageModule={generateAboutPageData()} />
    <FooterComponent footerModule={generateDummyFooterData()} />
  </div>
);

export { OverviewPageComponent };
