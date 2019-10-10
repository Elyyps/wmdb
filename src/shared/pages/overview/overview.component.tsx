import * as React from "react";

import { LocationsSectionComponent } from "@app/prep/modules-prep/locations-section";
import { LocationsData, Cards, CardsSecondary } from "@app/prep/pages-prep/overzicht/dummy-data";
import { Button, Section } from "@app/prep/modules-prep/core";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateDummyNavbarData } from "@app/api/modules/nav-bar/generate-dummy-data";

import { OverviewComponent } from "@app/modules/overview";
import { generateDummyOverviewModule } from "@app/api/modules/overview";
import { FooterComponent } from "@app/modules/footer";
import { generateDummyFooterData } from "@app/api/modules/footer/generate-dummy-data";
import { HeaderSimpleComponent } from "@app/modules/header-simple";
import { generateDummyHeaderSimpleModule } from "@app/api/modules/header-simple/";

export interface IOverzichtComponentProps {}

const OverviewPageComponent = (props: IOverzichtComponentProps) => (
  <div>
    <NavBarComponent navbarModule={generateDummyNavbarData()} />
    <HeaderSimpleComponent headerSimpleModule={generateDummyHeaderSimpleModule()} />
    <OverviewComponent overviewModule={generateDummyOverviewModule()} />
    {/* location module */}
    {/* over deze pagina  */}
    <FooterComponent footerModule={generateDummyFooterData()} />
  </div>
);

export { OverviewPageComponent };
