import React from "react";
import styles from "../single-wmdb-component.module.scss";
import { IconComponent } from "@app/prep/modules-prep/core";
import CLOSE from "@assets/icons/cross.svg";

export interface ISingleWmdkModalComponentProps {
  children: any;
  onClick: any;
  title: string;
}

const SingleWmdbModal = (props: ISingleWmdkModalComponentProps) => (
  <div className={styles["single-wmdb-modal"]}>
    <div className={styles["single-wmdb-modal-head"]}>
      <button onClick={props.onClick} className={styles["single-wmdb-modal-close"]}>
        <IconComponent icon={CLOSE} size={"16px"} />
      </button>
      <h5>{props.title}</h5>
    </div>
    {props.children}
  </div>
);

export { SingleWmdbModal };
