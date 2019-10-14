import React from "react";
import styles from "./advertise-component.module.scss";
import RECTANGLE from "@assets/rectangle.png";
import { Button } from "@app/core/button";

interface IadvertiseProps {}

const Advertise = (props: IadvertiseProps) => (
  <div className={styles["advertise"]} style={{ backgroundImage: `url(${RECTANGLE})` }}>
    <div className={styles["advertise-item"]}>
      <div className={styles["advertise-title"]}>Surfen? Dat doe je in Zeeland.</div>
      <Button title={"Meer info"} />
    </div>
    <div className={styles["advertise-label"]}>Advertentie</div>
  </div>
);

export { Advertise };
