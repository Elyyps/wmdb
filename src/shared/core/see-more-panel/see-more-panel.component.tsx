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
  <Link to={link} className={styles["see-more-panel"]}>
    <div className={styles["see-more-panel__title"]}>{title}</div>
    <div className={styles["see-more-panel__arrow"]}>
      <IconComponent icon={Arrow} size={"14px"} strokeColor="#b7b7b7" />
    </div>
  </Link>
);

export { SeeMorePanel };
