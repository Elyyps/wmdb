import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./arrow-panel-component.module.scss";
import Arrow from "@assets/icons/chevron-down.svg";
import { IconComponent } from '@app/core/icon';

interface IArrowPanelProps {
  link: string;
  title?: string;
}

const ArrowPanel = ({ link, title }: IArrowPanelProps) => (
  <Link to={link} className={styles["arrow-panel"]}>
    <div className={styles["arrow-panel__title"]}>{title}</div>
    <div className={styles["arrow-panel__arrow"]}>
      <IconComponent fillColor="white" icon={Arrow} size={"14px"} />
    </div>
  </Link>
);

export { ArrowPanel, IArrowPanelProps };
