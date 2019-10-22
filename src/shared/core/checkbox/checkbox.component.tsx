import * as React from "react";
import styles from "./checkbox-component.module.scss";

interface ICheckboxProps {
  count?: number;
  id?: any;
  isChecked?: any;
  label?: string;
  name?: any;
  onChange?: any;
  value?: any;
}

const Checkbox = ({ name, label, id, onChange, isChecked, count, value }: ICheckboxProps) => (
  <React.Fragment>
    <label htmlFor={name} className={styles["checkbox-label"]}>
      <input
        checked={isChecked}
        type="checkbox"
        name={name}
        className={styles["checkbox"]}
        aria-checked="false"
        id={name}
        onChange={onChange}
        value={value}
      />
      {label}
      {count === 0 ? (
        <span className={styles["checkbox-count"]}>(0)</span>
      ) : (
        <span className={styles["checkbox-count"]}>({count})</span>
      )}
    </label>
  </React.Fragment>
);

export { Checkbox };
