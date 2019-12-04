import * as React from "react";
import { NavBarComponent } from "@app/modules/nav-bar";
import { FooterComponent } from "@app/modules/footer";
import { HeaderSimpleComponent } from "@app/modules/header-simple";
import { generateOrganizationsHeaderDummyData } from "@app/api/modules/header-simple";
import { generateDummyNavbarData } from "@app/api/modules/nav-bar/generate-dummy-data";
import { generateDummyFooterData } from "@app/api/modules/footer/generate-dummy-data";

import { OrganizationsComponent } from "@app/modules/organizations";
import { generateOrganizationsData } from "@app/api/modules/organizations/end-point";

export const OrganizationsPageComponent = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <React.Fragment>
      <NavBarComponent navbarModule={generateDummyNavbarData()} />
      <HeaderSimpleComponent headerSimpleModule={generateOrganizationsHeaderDummyData()} />
      <OrganizationsComponent organisations={generateOrganizationsData()} />
      <FooterComponent footerModule={generateDummyFooterData()} />
    </React.Fragment>
  );
};
