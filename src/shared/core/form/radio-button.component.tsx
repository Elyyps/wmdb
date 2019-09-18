import * as React from "react";
import styles from "./form-component.module.scss";

interface ICheckboxProps {
  count?: number;
  id: string;
  isChecked?: any;
  key?: any;
  label?: string;
  name: string;
  onChange?: any;
  value?: string;
}

const RadioButton = ({ name, label, id, onChange, isChecked, count, value }: ICheckboxProps) => (
  <React.Fragment>
    <div className={styles["radio-button"]}>
      <label htmlFor={id} className={"radio-button__label"}>
        <input
          checked={isChecked}
          type="radio"
          name={name}
          className={styles["radio-button__input"]}
          aria-checked="false"
          id={id}
          onChange={onChange}
          value={value}
        />
        <div className={styles["radio-button__check"]} />
        <div className={styles["radio-button__check-label"]}>
          <span>{label}</span>
          {count && <span className={styles["radio-button-count"]}>({count})</span>}
        </div>
      </label>
    </div>
  </React.Fragment>
);

export { RadioButton };
