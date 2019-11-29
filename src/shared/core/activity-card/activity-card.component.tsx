import * as React from "react";
import styles from "./activity-card-component.module.scss";
import { IconComponent } from "../icon";
import Arrow from "@assets/icons/chevron-right.svg";
export interface IActivityCardComponentProps {
  title: string;
  icon?: string;
  total?: number | undefined;
  color?: string;
}

const ActivityCardComponent = ({ icon, title, total, color }: IActivityCardComponentProps) => (
  <div className={styles["activity-card"]} style={{ borderBottomColor: color ? color : "white" }}>
    <div className={styles["activity-card__head"]}>
      <div className={styles["activity-card__title"]}>
        {icon && (
          <div className={styles["activity-card__title__icon"]} style={{ backgroundColor: color ? color : "white" }}>
            <span>
              <IconComponent icon={icon} size={"34px"} />
            </span>
          </div>
        )}
        <span>{title}</span>
      </div>

      <div className={styles["activity-card__count"]}>
        {total ? <span>({total})</span> : ""}
        <IconComponent icon={Arrow} size={"12px"} fillColor="#34aadf" />
      </div>
    </div>
  </div>
);

export { ActivityCardComponent };
