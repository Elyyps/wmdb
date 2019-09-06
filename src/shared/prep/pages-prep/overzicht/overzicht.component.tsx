import * as React from "react";
import styles from "./overzicht-component.module.scss";
import { FooterComponent, HeaderSimpleComponent, NavBarComponent, OverviewComponent } from "@app/prep/modules-prep";
import { LocationsSectionComponent } from "@app/prep/modules-prep/locations-section";
import { LocationsData, Cards, CardsSecondary } from "@app/prep/pages-prep/overzicht/dummy-data";
import { BodyTextSimpleComponent } from "@app/prep/modules-prep/body-text-simple";

export interface IOverzichtComponentProps {}

const OverzichtComponent = (props: IOverzichtComponentProps) => (
  <div className={styles["overzicht"]}>
    <NavBarComponent />
    <HeaderSimpleComponent title={"Leuke dagjes uit met de kinderen in Amsterdam"} />
    <OverviewComponent
      Cards={Cards}
      CardsSecondary={CardsSecondary}
      sidebar={{ title: "Filters", placeholder: "Plaats, regio of provincie" }}
      total={true}
    />
    <LocationsSectionComponent {...LocationsData} />
    <BodyTextSimpleComponent />
    <FooterComponent />
  </div>
);

export { OverzichtComponent };
