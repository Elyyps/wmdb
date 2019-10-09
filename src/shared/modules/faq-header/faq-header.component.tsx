import * as React from "react";
import styles from "./faq-header-component.module.scss";

export interface IFAQHeaderComponentProps {
  content?: string;
  image?: string;
  title: string;
}

const FAQHeaderComponent = (props: IFAQHeaderComponentProps) => (
  <div className={styles["faq-header"]}>
    <div className="uk-container">
      <div className={styles["faq-header__holder"]}>
        <div className={styles["faq-header__body"]}>
          <h1>{props.title}</h1>
          {props.content}
        </div>
        {props.image && (
          <div className={styles["faq-header__image"]}>
            <img src={props.image} alt="image" />
          </div>
        )}
      </div>
    </div>
  </div>
);

export { FAQHeaderComponent };
