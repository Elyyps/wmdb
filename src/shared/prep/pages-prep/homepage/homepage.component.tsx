import * as React from "react";
import styles from "./homepage-component.module.scss";
import { HeroComponent, NavBarComponent, FooterComponent } from "@app/prep/modules-prep";
import Placeholder from "@assets/img01.png";
import {
  CategoryOverviewData,
  FAQOverviewData,
  FeaturedPostsData,
  LocationsData,
  MostViewedLocations,
  Cards
} from "@app/prep/pages-prep/homepage/dummy-data";
import { LocationsSectionComponent } from "@app/prep/modules-prep/locations-section/";
import { CategoryOverviewComponent } from "@app/prep/modules-prep/category-overview/";
import { CardPost, Section } from "@app/prep/modules-prep/core";
import { FAQOverviewComponent } from "@app/prep/modules-prep/faq-overview";
import { FeaturedPostsComponent } from "@app/prep/modules-prep/featured-posts";
import { MostViewedLocationsComponent } from "@app/prep/modules-prep/most-viewed-locations/";

export interface IHomepageComponentProps {}

const HomepageComponent = (props: IHomepageComponentProps) => (
  <div className={styles["homepage"]}>
    <NavBarComponent />
    <HeroComponent
      title={"Wat gaan we dít jaar doen?! Vergelijk online gemakkelijk álle bedrijfsuitjes van Nederland"}
      image={Placeholder}
    />
    <CategoryOverviewComponent {...CategoryOverviewData} />
    <Section title={"Nieuwe activiteiten"} paddingBottom={"40px"} paddingTop={"40px"}>
      <div className="section__columns uk-grid uk-child-width-1-2@m">
        {Cards.map((card, key) => (
          <div key={key}>
            <CardPost modify={"small"} {...card} />
          </div>
        ))}
      </div>
    </Section>
    <FAQOverviewComponent {...FAQOverviewData} />
    <FeaturedPostsComponent {...FeaturedPostsData} />
    <MostViewedLocationsComponent {...MostViewedLocations} />
    <LocationsSectionComponent {...LocationsData} />
    <FooterComponent />
  </div>
);

export { HomepageComponent };
