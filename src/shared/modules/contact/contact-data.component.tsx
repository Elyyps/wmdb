import React from "react";
import styles from "./contact-component.module.scss";
import { Button } from "@app/core/button";
import LOCATION from "@assets/icons/location.svg";
import { Link } from "react-router-dom";
import { ILink } from "@app/api/core/link";

export interface IContactDataComponentProps {
  contactName: string;
  content: string;
  onClick: () => void;
  phone: ILink;
  phoneButton: ILink;
  priceButton: ILink;
}

const ContactDataComponent = (props: IContactDataComponentProps) => (
  <div className={styles["contact-data"]}>
    <p>{props.content}</p>
    <Button title={props.phoneButton.title} href={props.phoneButton.url} icon={LOCATION} position={"left"} />
    <div className={styles["contact-data-info"]}>
      <span>
        <Link to={props.phone.url}>{props.phone.title}</Link>
      </span>
      <span>{props.contactName}</span>
    </div>
    <Button title={props.phoneButton.title} href={props.phoneButton.url} icon={LOCATION} position={"left"} />
    <div className={styles["contact-data-bottom"]}>
      <Button
        title={props.priceButton.title}
        icon={LOCATION}
        position={"left"}
        variant={"primary"}
        onClick={props.onClick}
      />
    </div>
  </div>
);

export { ContactDataComponent };
