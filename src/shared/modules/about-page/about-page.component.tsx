import * as React from "react";
import styles from "./about-page-component.module.scss";
import { Section } from "@app/core/section";
import { BodyTextComponent } from "@app/core/bodytext";
import { IAboutPage } from "@app/api/modules/about-page/about-page";
import { Button } from "@app/core/button";

export interface IAboutPageComponentProps {
  aboutPage: IAboutPage;
}

const AboutPageComponent = (props: IAboutPageComponentProps) => (
  <Section title={props.aboutPage.title} paddingBottom={"40px"} paddingTop={"40px"} align="center">
    <div className={styles["about-page"]}>
      <BodyTextComponent html={props.aboutPage.content} />
      <div className={styles["about-page-button"]}>
        <Button title={props.aboutPage.button.title} variant="primary" href={props.aboutPage.button.url} />
      </div>
    </div>
  </Section>
);

export { AboutPageComponent };
