import * as React from "react";
import styles from "./event-card-component.module.scss";
import { LinkComponent } from "../link";

export interface IEventCardComponentProps {
  image?: string;
  link: string;
  title?: string;
}

const EventCardComponent = ({ title, image, link }: IEventCardComponentProps) => (
  <div className={styles["event-card"]}>
    <div className={styles["event-card-head"]}>
      <LinkComponent to={link}>
        <img src={image} alt="image" />
      </LinkComponent>
      <div className={styles["event-card-title"]}>
        <h4>{title}</h4>
      </div>
    </div>
  </div>
);

export { EventCardComponent };
