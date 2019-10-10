import * as React from "react";
import { Link } from "react-router-dom";
import { ImageComponent } from "@app/prep/modules-prep/core";
import styles from "./logo-component.module.scss";

export interface ILogoComponentProps {
  logo: string;
  url?: string;
}

const LogoComponent = (props: ILogoComponentProps) => (
  <Link to={props.url ? props.url : ""} className={styles["logo"]}>
    <ImageComponent src={props.logo} />
  </Link>
);

export { LogoComponent };
