import * as React from "react";
import { IconComponent } from "@app/prep/modules-prep/core";
import styles from "./contact-component.module.scss";
import { Link } from "react-router-dom";
import Phone from "@assets/icons/images.svg";
import { ILink } from "@app/api/core/link";

export interface IContactTelephoneComponentProps {
  button: ILink;
  content: string;
  title: string;
}

const ContactTelephoneComponent = (props: IContactTelephoneComponentProps) => (
  <div className={styles["contact-telephone"]}>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <div className={styles["contact-telephone-bottom"]}>
      <Link to={props.button.url}>
        <IconComponent stroke icon={Phone} size={"16px"} />
        <span>{props.button.title}</span>
      </Link>
    </div>
  </div>
);

export { ContactTelephoneComponent };
