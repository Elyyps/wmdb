import * as React from "react";
import styles from "./card-advertise-component.module.scss";
import ImageAdvertise from "@assets/advertise.png";
import { Button, IButtonProps } from "@app/core/button";

interface ICardAdvertiseProps {
  button: IButtonProps;
  image: string[];
  title?: string;
  variant: string;
}

const CardAdvertise = ({ title, image, button }: ICardAdvertiseProps) => (
  <div className={`${styles["card-advertise"]} ${styles["divider"]} uk-invert`}>
    <div className={styles["card-image"]}>
      <img src={image.length > 0 ? image[0] : ImageAdvertise} alt="ImageAdvertise" />
    </div>
    <div className={styles["card-body"]}>
      <div className={styles["card-title"]}>
        <h2>{title}</h2>
      </div>
      <div className={styles["card-action"]}>
        <Button {...button} />
      </div>
    </div>
  </div>
);

export { CardAdvertise };
