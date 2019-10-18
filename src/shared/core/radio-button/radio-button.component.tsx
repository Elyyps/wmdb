import * as React from "react";
import styles from "./radio-button-component.module.scss";

export interface IRadioButtonComponentProps {
  count?: number;
  id: string;
  isChecked?: any;
  key?: any;
  label?: string;
  name: string;
  onChange?: any;
  value: string;
}

const RadioButtonComponent = (props: IRadioButtonComponentProps) => (
  <div className={styles["radio-button"]}>
    <label htmlFor={props.id} className={styles["radio-button__label"]}>
      <input
        checked={props.isChecked}
        type="radio"
        name={props.name}
        className={styles["radio-button__input"]}
        aria-checked="false"
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      />
      <div className={styles["radio-button__check"]} />
      <div className={styles["radio-button__check-label"]}>
        <span>{props.label}</span>
        {props.count && <span className={styles["radio-button-count"]}>({props.count})</span>}
      </div>
    </label>
  </div>
);

export { RadioButtonComponent };
