import React from "react";
import styles from "../single-wmdk-component.module.scss";
import { Button } from "@app/prep/modules-prep/core";
import LOCATION from "@assets/icons/location.svg";
import { Link } from "react-router-dom";

export interface ISingleWmdkDataComponentProps {
  onClick: any;
}

const SingleWmdkData = (props: ISingleWmdkDataComponentProps) => (
  <div className={styles["single-wmdk-data"]}>
    <p>Wij zouden het op prijs stellen dat wanneer u via ons contact zoekt of belt, u WegmetdeBaas vermeldt!</p>
    <Button title={"Toon telefoonnummer"} href={"#"} icon={LOCATION} position={"left"} />
    <div className={styles["single-wmdk-data-info"]}>
      <span>
        <Link to={"tel:024 1234 5678"}>024 1234 5678</Link>
      </span>
      <span>Marie Autenbach</span>
    </div>
    <Button title={"Toon telefoonnummer"} href={"#"} icon={LOCATION} position={"left"} />
    <div className={styles["single-wmdk-data-bottom"]}>
      <Button
        title={"Prijsindicatie aanvragen"}
        icon={LOCATION}
        position={"left"}
        variant={"primary"}
        onClick={props.onClick}
      />
    </div>
  </div>
);

export { SingleWmdkData };
