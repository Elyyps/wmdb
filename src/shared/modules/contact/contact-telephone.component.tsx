import * as React from "react";
import styles from "./contact-component.module.scss";
import { Link } from "react-router-dom";
import Phone from "@assets/icons/phone.svg";
import { ILink } from "@app/api/core/link";
import { IconComponent } from "@app/core/icon";

export interface IContactTelephoneComponentProps {
  button: ILink;
  contactName: string;
  content: string;
  phone: string;
  title: string;
}

const ContactTelephoneComponent = (props: IContactTelephoneComponentProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className={styles["contact-telephone"]}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <div className={styles["contact-telephone-bottom"]}>
        <Link to={"#"} onClick={() => setIsOpen(!isOpen)}>
          <IconComponent icon={Phone} size={"16px"} fillColor={"#34aadf"} />
          <span>{props.button.title}</span>
        </Link>
        <div className={styles["contact-telephone-number"]} style={{ display: isOpen ? "flex" : "none" }}>
          <div className={styles["contact-telephone-info"]}>Telefoonnummer : </div>
          <span>{props.phone}</span>
          <div className={styles["contact-telephone-info"]}>Contact naam : </div>
          <span>{props.contactName}</span>
          <p>Wij stellen het op prijs wanneer u vermeldt, dat u via DNLS belt.</p>
        </div>
      </div>
    </div>
  );
};

export { ContactTelephoneComponent };
