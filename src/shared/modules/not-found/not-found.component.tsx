import * as React from "react";
import styles from "./not-found-component.module.scss";
import PlaceholderImage from "@assets/WMDB2.svg";
import { IconComponent } from "@app/core/icon";
import { Button } from "@app/core/button";

export interface INotFoundComponentProps {}

const NotFoundComponent = (props: INotFoundComponentProps) => (
  <div className={styles["not-found"]}>
    <div className={styles["not-found__table-cell"]}>
      <div className={styles["not-found__container"]}>
        <IconComponent height={"220px"} width="160px" fillColor="white" icon={PlaceholderImage} />
        <div className={styles["not-found__content"]}>
          <div className={styles["not-found__content-title"]}>
            <h2>Oeps!</h2>
          </div>
          <span>Pagina niet gevonden. We helpen je graag de weg weer terug te vinden.</span>
          <Button title="WMDB homepage" />
        </div>
      </div>
    </div>
  </div>
);

export { NotFoundComponent };
