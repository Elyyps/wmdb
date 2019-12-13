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

import { generateDummyHeroModule } from "@app/api/modules/hero/hero-module";
import { GenerateDummyCategoryOverviewData } from "@app/api/modules/category-overview/dummy-data";
import { FAQOverviewComponent } from "@app/modules/faq-overview";
import { generateDummyFaqOverviewData, generateDummyLocatieOverviewData } from "@app/api/modules/faq-overview";
import { HeroComponent } from "@app/modules/hero";
import { CategoryOverviewComponent } from "@app/modules/category-overview";

const HomePageComponent = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <React.Fragment>
      <NavBarComponent navbarModule={generateNavbarData()} />
      <HeroComponent heroModule={generateDummyHeroModule()} />
      <CategoryOverviewComponent categoryOverviewModule={GenerateDummyCategoryOverviewData()} />
      <NewActivityComponent newActivityModule={generateNewActivityData()} />
      <CompanyOutingComponent companyOutingModule={generateCompanyOutingData()} />
      <FAQOverviewComponent faqOverviewModule={generateDummyLocatieOverviewData()} />
      <OtherLocationsComponent otherLocationsModule={generateOtherLocationsData()} />
      <FooterComponent footerModule={generateFooterData()} />
    </React.Fragment>
  );
};
export { HomePageComponent };
