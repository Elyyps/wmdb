import React, { useState } from "react";
import styles from "./labe-component.module.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import LOCATION from "@assets/icons/location.svg";

export interface ILabelComponentProps {
  children: any;
}

const LabelComponent = (props: ILabelComponentProps) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <div className={styles["label"]}>
      <span>{props.children}</span>
      <div className={styles["label-icon"]} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        {hover ? (
          <div className={styles["label-info"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi doloribus facilis neque
            officiis optio quaerat similique tempore vitae voluptas.
          </div>
        ) : (
          ""
        )}
        <IconComponent color={"#36c4d9"} icon={LOCATION} size={"8px"} />
      </div>
    </div>
  );
};

export { LabelComponent };
