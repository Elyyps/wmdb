import * as React from "react";
import styles from "./header-simple-component.module.scss";
import { IHeaderSimpleModule } from "@app/api/modules/header-simple";

export interface IHeaderSimpleComponentProps {
  headerSimpleModule: IHeaderSimpleModule;
}

const HeaderSimpleComponent = (props: IHeaderSimpleComponentProps) => {
  const { picture, title } = props.headerSimpleModule;

  return (
    <div className={styles["header-simple"]}>
      <div className={styles["header-simple__overlay"]} />
      <div className={styles["header-simple__image"]}>
        <img src={picture} alt="oasis image" />
      </div>
      <div className={styles["header-simple__title"]}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export { HeaderSimpleComponent };
