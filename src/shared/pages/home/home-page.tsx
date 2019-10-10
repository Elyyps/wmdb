import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { NewActivityComponent } from "@app/modules/new-activity";
import { generateNewActivityData } from "@app/api/modules/new-activity/end-point";
import { CompanyOutingComponent } from "@app/modules/company-outing";
import { generateCompanyOutingData } from "@app/api/modules/company-outing/end-point";
import { OtherLocationsComponent } from "@app/modules/other-locations";
import { generateOtherLocationsData } from "@app/api/modules/other-locations/end-point";

const HomePageComponent = () => (
  <React.Fragment>
    <NavBarComponent navbarModule={generateNavbarData()} />
    <NewActivityComponent newActivityModule={generateNewActivityData()} />
    <CompanyOutingComponent companyOutingModule={generateCompanyOutingData()} />
    <OtherLocationsComponent otherLocationsModule={generateOtherLocationsData()} />
    <FooterComponent footerModule={generateFooterData()} />
  </React.Fragment>
);
export { HomePageComponent };
