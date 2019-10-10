import * as React from "react";
import styles from "./ad-banner-component.module.scss";
import { Button } from "../button";
import { ILink } from "@app/api/core/link";

export interface IAdBannerComponentProps {
  advertisement: string;
  backgroundImage: string;
  button: ILink;
  content: string;
}

const AdBannerComponent = (props: IAdBannerComponentProps) => (
  <div className={styles["ad-banner"]} style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    <div className={styles["ad-banner-item"]}>
      <div className={styles["ad-banner-title"]}>{props.content}</div>
      <Button title={props.button.title} href={props.button.url} />
    </div>
    <div className={styles["ad-banner-label"]}>{props.advertisement}</div>
  </div>
);

export { AdBannerComponent };
