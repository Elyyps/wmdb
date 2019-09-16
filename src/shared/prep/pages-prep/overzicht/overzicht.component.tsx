import * as React from "react";
import styles from "./overzicht-component.module.scss";
import { FooterComponent, HeaderSimpleComponent, NavBarComponent, OverviewComponent } from "@app/prep/modules-prep";
import { LocationsSectionComponent } from "@app/prep/modules-prep/locations-section";
import { LocationsData, Cards, CardsSecondary } from "@app/prep/pages-prep/overzicht/dummy-data";
import { Button, Section } from "@app/prep/modules-prep/core";

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
    <Section title={"Over deze pagina"} paddingBottom={"40px"} paddingTop={"40px"} align="center">
      <p>
        Er zijn heel veel citygames mogelijk in Amsterdam! U kunt zo de stad Amsterdam op een leuke manier beter leren
        kennen. U kunt GPS tochten door de stad doen, moordtochten, puzzeltochten enz. U kunt lopend Amsterdam verkennen
        tijdens uw citygame, maar ook per step, tuktuk, waterfiets of solex! Kiest u voor bepaalde wijken zoals de
        Wallen, of gaat u liever Zuid.
      </p>

      <p>Nog niet alles duidelijk? Stel je vraag!</p>
      <Button title="Stel je vraag" variant="primary" href="/" />
    </Section>
    <FooterComponent />
  </div>
);

export { OverzichtComponent };
