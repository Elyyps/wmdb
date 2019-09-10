import * as React from "react";
import styles from "./info-page-component.module.scss";
import { NavBarComponent, FooterComponent } from "@app/prep/modules-prep";
import { Section, Button, Input, TextArea, Collapse } from "@app/prep/modules-prep/core";
import { HeaderInfoComponent } from "@app/prep/modules-prep/header-info";
import PlaceholderImage from "@assets/img03.png";
import { InfoData } from "@app/prep/pages-prep/info-page/dummy-data";

export interface IInfoPageComponentProps {}

const InfoPageComponent = (props: IInfoPageComponentProps) => (
  <div className={styles["homepage"]}>
    <NavBarComponent />
    <HeaderInfoComponent
      title={"Veelgestelde vragen"}
      content={"Alle vragen omtrent WegmetdeBaas. Hoe vind je zo snel mogelijk het perfecte uitje?"}
      image={PlaceholderImage}
    />

    <Section paddingBottom={"72px"} paddingTop={"72px"}>
      <div className="section__columns uk-grid uk-child-width-1-2@s uk-grid-xlarge">
        <div>
          <h2>Veelgestelde vragen</h2>
          <Collapse modify="show-desktop" items={InfoData} />
        </div>
        <div>
          <h2>Andere vragen?</h2>
          <p>Mail ons het aanvraagformulier of direct via info@wegmetdebaas.nl</p>
          <form action="#">
            <Input label={"Naam"} name={"Naam"} />
            <Input label={"E-mailadres"} name={"e-mail"} />
            <TextArea label={"Vraag of opmerking (optioneel)"} name={"textarea"} />
            <div className="form__item">
              <Button title={"Verstuur mijn vraag"} variant={"secondary full"} />
            </div>
          </form>
        </div>
      </div>
    </Section>

    <FooterComponent />
  </div>
);

export { InfoPageComponent };
