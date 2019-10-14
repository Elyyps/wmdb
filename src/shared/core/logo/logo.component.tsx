import * as React from "react";
import { Link } from "react-router-dom";
import { ImageComponent } from "@app/core/image";
import styles from "./logo-component.module.scss";

export interface ILogoComponentProps {
  logo: string;
  url?: string;
}

const LogoComponent = (props: ILogoComponentProps) => (
  <Link to={props.url ? props.url : ""} className={styles["logo"]}>
    <ImageComponent style={{ maxWidth: 20 }} src={props.logo} />
  </Link>
);

export { LogoComponent };
