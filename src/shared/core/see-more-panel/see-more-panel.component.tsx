import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./see-more-panel-component.module.scss";
import Arrow from "@assets/icons/chevron-down.svg";
import { IconComponent } from "../icon";

interface ISeeMorePanelProps {
  link: string;
  title?: string;
}

const SeeMorePanel = ({ link, title }: ISeeMorePanelProps) => (
  <Link to={link} className={styles["see-more-card"]}>
    <div className={styles["see-more-card__title"]}>{title}</div>
    <div className={styles["see-more-card__arrow"]}>
      <IconComponent icon={Arrow} size={"14px"} stroke />
    </div>
  </Link>
);

export { SeeMorePanel };
