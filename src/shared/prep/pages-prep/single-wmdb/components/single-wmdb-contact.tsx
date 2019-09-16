import * as React from "react";
import { IconComponent } from "@app/prep/modules-prep/core";
import styles from "../single-wmdb-component.module.scss";
import { Link } from "react-router-dom";
import Phone from "@assets/icons/images.svg";

export interface ISingleWmdbContactComponentProps {}

const SingleWmdbContact = (props: ISingleWmdbContactComponentProps) => (
  <div className={styles["single-wmdb-contact"]}>
    <h2>Telefonisch contact</h2>
    <p>Ook al zijn wij vaak op pad met een groep, wij doen altijd ons best u te woord te staan.</p>
    <div className={styles["single-wmdb-contact-bottom"]}>
      <Link to={"#"}>
        <IconComponent stroke icon={Phone} size={"16px"} />
        <span>Toon telefoonnummer</span>
      </Link>
    </div>
  </div>
);

export { SingleWmdbContact };
