import * as React from "react";
import styles from "./expendable-component.module.scss";
import { BodyTextComponent } from "../bodytext";

export interface IExpendableItemComponentProps {
  callback?: (identifier?: number) => void;
  content: string;
  identifier?: number;
  opened?: boolean;
  title?: string;
}

const ExpendableItemComponent = (props: IExpendableItemComponentProps) => {
  const invokeCallback = () => {
    if (props.callback) {
      props.callback(props.identifier);
    }
  };

  return (
    <div className={`${styles["expendable__item"]} ${props.opened ? styles["show"] : styles["hide"]}`}>
      <button onClick={invokeCallback} className={styles["expendable__item-title"]}>
        {props.title}
      </button>
      <div className={styles["expendable__item-body"]} style={{ color: "#101010" }}>
        <BodyTextComponent html={props.content} />
      </div>
    </div>
  );
};
export { ExpendableItemComponent };
