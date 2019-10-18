import * as React from "react";
import styles from "./about-page-component.module.scss";
import { BodyTextComponent } from "@app/core/bodytext";
import { IAboutPageModule } from "@app/api/modules/about-page/about-page";
import { Button } from "@app/core/button";
import { ModuleSectionComponent } from "@app/core/module-section";

export interface IAboutPageComponentProps {
  aboutPageModule: IAboutPageModule;
}

const AboutPageComponent = ({ aboutPageModule }: IAboutPageComponentProps) => (
  <ModuleSectionComponent
    title={aboutPageModule.title}
    paddingBottom={"40px"}
    paddingTop={"40px"}
    align="center"
    pattern
  >
    <div className={styles["about-page"]}>
      <BodyTextComponent html={aboutPageModule.content} />
      <div className={styles["about-page-button"]}>
        <Button title={aboutPageModule.button.title} variant="primary" href={aboutPageModule.button.url} />
      </div>
    </div>
  </ModuleSectionComponent>
);

export { AboutPageComponent };
