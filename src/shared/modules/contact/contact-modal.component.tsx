import React from "react";
import styles from "./contact-component.module.scss";
import CLOSE from "@assets/icons/cross.svg";
import { IconComponent } from "@app/core/icon";

export interface IContactModalComponentProps {
  children: any;
  onClick: any;
  title: string;
}

const ContactModalComponent = (props: IContactModalComponentProps) => (
  <div className={styles["contact-modal"]}>
    <div className={styles["contact-modal-head"]}>
      <button onClick={props.onClick} className={styles["contact-modal-close"]}>
        <IconComponent icon={CLOSE} size={"16px"} />
      </button>
      <h5>{props.title}</h5>
    </div>
    {props.children}
  </div>
);

export { ContactModalComponent };
