import * as React from "react";
import styles from "./homepage-component.module.scss";
import { HeroComponent, NavBarComponent, FooterComponent } from "@app/prep/modules-prep";
import Oasis from "@assets/oasis.jpg";
import {
  CategoryOverviewData,
  FAQOverviewData,
  FeaturedPostsData,
  LocationsData,
  MostViewedLocations
} from "@app/prep/pages-prep/homepage/dummy-data";
import { LocationsSectionComponent } from "@app/prep/modules-prep/locations-section/";
import { CategoryOverviewComponent } from "@app/prep/modules-prep/category-overview/";
import { Section } from "@app/prep/modules-prep/core";
import { FAQOverviewComponent } from "@app/prep/modules-prep/faq-overview";
import { FeaturedPostsComponent } from "@app/prep/modules-prep/featured-posts";
import { MostViewedLocationsComponent } from "@app/prep/modules-prep/most-viewed-locations/";

export interface IHomepageComponentProps {}

const HomepageComponent = (props: IHomepageComponentProps) => (
  <div className={styles["homepage"]}>
    <NavBarComponent />
    <HeroComponent
      title={"Wat gaan we dít jaar doen?! Vergelijk online gemakkelijk álle bedrijfsuitjes van Nederland"}
      image={Oasis}
    />
    <CategoryOverviewComponent {...CategoryOverviewData} />
    <Section
      title={"Zoveel mensen, zoveel wensen!"}
      paddingBottom={"72px"}
      paddingTop={"72px"}
      size={"small"}
      align={"center"}
    >
      Erg lastig om een keuze te maken waar iedereen blij van wordt, terwijl dat toch het doel is. Geen nood! Wij zitten
      klaar om je te helpen.
    </Section>
    <FAQOverviewComponent {...FAQOverviewData} />
    <FeaturedPostsComponent {...FeaturedPostsData} />
    <MostViewedLocationsComponent {...MostViewedLocations} />
    <LocationsSectionComponent {...LocationsData} />
    <FooterComponent />
  </div>
);

export { HomepageComponent };
