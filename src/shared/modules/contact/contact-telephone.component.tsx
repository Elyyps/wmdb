import * as React from "react";
import styles from "./contact-component.module.scss";
import { Link } from "react-router-dom";
import Phone from "@assets/icons/phone.svg";
import { ILink } from "@app/api/core/link";
import { IconComponent } from "@app/core/icon";

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
        <IconComponent icon={Phone} size={"16px"} fillColor={"#34aadf"} />
        <span>{props.button.title}</span>
      </Link>
    </div>
  </div>
);

export { ContactTelephoneComponent };
