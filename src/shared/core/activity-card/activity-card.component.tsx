import * as React from "react";
import styles from "./activity-card-component.module.scss";
import { IconComponent } from "../icon";
import Arrow from "@assets/icons/chevron-right.svg";
import { trimText } from "@app/util/trim-text";
export interface IActivityCardComponentProps {
  color?: string;
  icon?: string;
  title: string;
  total?: number | undefined;
}

const ActivityCardComponent = ({ icon, title, total, color }: IActivityCardComponentProps) =>{
  const [windowSize, setWindowSize] = React.useState(0);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  React.useEffect(() => {
    handleResize();
  }, [windowSize]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

return (
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
        <span className={styles["activity-card__text"]}>{(windowSize < 760 && windowSize>640) ? trimText(title,18,"...",false) : title}</span>
      </div>

      <div className={styles["activity-card__count"]}>
        {total ? <h6>({total})</h6> : ""}
        <IconComponent icon={Arrow} size={"12px"} fillColor="#34aadf" />
      </div>
    </div>
  </div>
);

} 

export { ActivityCardComponent };
