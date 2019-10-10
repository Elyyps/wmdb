import * as React from "react";
import styles from "./faq-component.module.scss";
import { ExpendableComponent } from "@app/core/expendable";
import { IFAQModule } from "@app/api/modules/faq/faq";
import { FAQFormComponent } from "@app/core/faq-form";
import { ModuleSectionComponent } from "@app/core/module-section";

export interface IFAQComponentProps {
  FAQModule: IFAQModule;
}

const FAQComponent = (props: IFAQComponentProps) => (
  <ModuleSectionComponent paddingBottom={"72px"} paddingTop={"72px"}>
    <div className={` ${styles["faq__columns"]} uk-grid uk-child-width-1-2@s uk-grid-xlarge `}>
      <div>
        <h2>{props.FAQModule.title}</h2>
        <ExpendableComponent modify="show-desktop" items={props.FAQModule.items} />
      </div>
      <div>
        <h2>{props.FAQModule.formTitle}</h2>
        <p>{props.FAQModule.formContent}</p>
        <FAQFormComponent onSubmit={() => alert("submitted")} />
      </div>
    </div>
  </ModuleSectionComponent>
);

export { FAQComponent };
