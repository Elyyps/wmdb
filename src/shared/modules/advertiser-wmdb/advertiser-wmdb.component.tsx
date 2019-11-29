import * as React from "react";
import styles from "./advertiser-wmdb-component.module.scss";
import { ModuleSectionComponent } from "@app/core/module-section";
import { FAQFormComponent } from "@app/core/faq-form";
import { IAdvertiserWMDB } from "@app/api/modules/advertiser-wmdb/advertiser-wmdb";
import { BodyTextComponent } from "@app/core/bodytext";

export interface IAdvertiserWMDBComponentProps {
  advertiserModule: IAdvertiserWMDB;
}

const AdvertiserWMDBComponent = ({ advertiserModule }: IAdvertiserWMDBComponentProps) => (
  <ModuleSectionComponent
    paddingTop={"72px"}
    paddingBottom={"72px"}
    paddingTopMobile={"32px"}
    paddingBottomMobile={"32px"}
    pattern
  >
    <div className={"uk-grid uk-child-width-1-2@s uk-grid-xlarge"}>
      <div className={styles["advertiser-wmdb"]}>
        <h1>{advertiserModule.title}</h1>
        <BodyTextComponent html={advertiserModule.content} />
        <br />
      </div>

      <div className={styles["advertiser-wmdb-form"]}>
        <h1>{advertiserModule.formTitle}</h1>
        <FAQFormComponent onSubmit={() => alert("submitted ")} />
      </div>
    </div>
  </ModuleSectionComponent>
);

export { AdvertiserWMDBComponent };
