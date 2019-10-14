import React from "react";
import styles from "../single-wmdb-component.module.scss";
import { Button } from "@app/core/button";
import LOCATION from "@assets/icons/location.svg";
import { Link } from "react-router-dom";

export interface ISingleWmdkDataComponentProps {
  onClick: any;
}

const SingleWmdbData = (props: ISingleWmdkDataComponentProps) => (
  <div className={styles["single-wmdb-data"]}>
    <p>Wij zouden het op prijs stellen dat wanneer u via ons contact zoekt of belt, u WegmetdeBaas vermeldt!</p>
    <Button title={"Toon telefoonnummer"} href={"#"} icon={LOCATION} position={"left"} />
    <div className={styles["single-wmdb-data-info"]}>
      <span>
        <Link to={"tel:024 1234 5678"}>024 1234 5678</Link>
      </span>
      <span>Marie Autenbach</span>
    </div>
    <Button title={"Toon telefoonnummer"} href={"#"} icon={LOCATION} position={"left"} />
    <div className={styles["single-wmdb-data-bottom"]}>
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

export { SingleWmdbData };
