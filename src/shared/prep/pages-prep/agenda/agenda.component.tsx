import * as React from "react";
import styles from "./agenda-component.module.scss";
import { FooterComponent, HeaderSimpleComponent, NavBarComponent, OverviewComponent } from "@app/prep/modules-prep";
import { LocationsSectionComponent } from "@app/prep/modules-prep/locations-section";
import { LocationsData, Cards, CardsSecondary } from "@app/prep/pages-prep/agenda/dummy-data";
import { BodyTextSimpleComponent } from "@app/prep/modules-prep/body-text-simple";

export interface IAgendaComponentProps {}

const AgendaComponent = (props: IAgendaComponentProps) => (
  <div className={styles["agenda"]}>
    <NavBarComponent />
    <HeaderSimpleComponent title={"Actuele agenda"} />
    <OverviewComponent
      Cards={Cards}
      CardsSecondary={CardsSecondary}
      sidebar={{ title: "Agenda", placeholder: "Zoek op naam of plaats", calendar: true }}
    />
    <LocationsSectionComponent {...LocationsData} />
    <BodyTextSimpleComponent />
    <FooterComponent />
  </div>
);

export { AgendaComponent };
