import * as React from "react";
import styles from "./not-found-component.module.scss";
import PlaceholderImage from "@assets/WMDB2.svg";
import { IconComponent } from "@app/core/icon";
import { Button } from "@app/core/button";

export interface INotFoundComponentProps {}

const NotFoundComponent = (props: INotFoundComponentProps) => (
  <div className={styles["not-found"]}>
    <div className={` ${styles["not-found__container"]} uk-container`}>
      <div className={styles["not-found__icon"]}>
        <IconComponent height={"376px"} width="182px" fillColor="white" icon={PlaceholderImage} />
      </div>
      <div className={styles["not-found__content"]}>
        <h2>Oeps!</h2>
        <span>Pagina niet gevonden. We helpen je graag de weg weer terug te vinden.</span>
        <div className={styles["not-found__content__button"]}>
          <Button title="WMDB homepage" href="/" />
        </div>
      </div>
    </div>
  </div>
);

export { NotFoundComponent };
