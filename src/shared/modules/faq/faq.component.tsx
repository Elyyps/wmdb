import * as React from "react";
import styles from "./faq-component.module.scss";
import { Section } from "@app/core/section";
import { ExpendableComponent } from "@app/core/expendable";
import { IFAQ } from "@app/api/modules/faq/faq";
import { FAQFormComponent } from "@app/core/faq-form";

export interface IFAQComponentProps {
  faq: IFAQ;
}

const FAQComponent = (props: IFAQComponentProps) => (
  <Section paddingBottom={"72px"} paddingTop={"72px"}>
    <div className={` ${styles["faq__columns"]} uk-grid uk-child-width-1-2@s uk-grid-xlarge `}>
      <div>
        <h2>{props.faq.title}</h2>
        <ExpendableComponent modify="show-desktop" items={props.faq.items} />
      </div>
      <div>
        <h2>{props.faq.formTitle}</h2>
        <p>{props.faq.formContent}</p>
        <FAQFormComponent onSubmit={() => alert("submitted")} />
      </div>
    </div>
  </Section>
);

export { FAQComponent };
