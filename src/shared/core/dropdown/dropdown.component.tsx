import React, { useState } from "react";
import classNames from "classnames";
import styles from "./dropdown-component.module.scss";
import { IDropdownItem } from "../../api/core/dropdown-item";

interface IDropdownProps {
  classModify?: string;
  errorMessage?: string;
  isError?: string;
  isSuccess?: boolean;
  label?: string;
  name?: string;
  onChange?: (value: any) => void;
  options?: IDropdownItem[];
  placeholder?: string;
}

const Dropdown = (props: IDropdownProps) => {
  const { name, options, placeholder, classModify, label, isError, isSuccess } = props;
  const selectClassName = classNames(styles["dropdown"], {
    [styles[`dropdown--${classModify}`]]: classModify
  });

  const wrapperClassnames = classNames({
    ["error"]: isError,
    ["success"]: isSuccess
  });

  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    {
      setValue(event.target.value);
      if (props.onChange) {
        props.onChange(event.target.value);
      }
    }
  };

  return (
    <React.Fragment>
      <div className={`${styles["form__item"]} ${wrapperClassnames}`}>
        {label && (
          <label htmlFor="label" className={styles["form__item-label"]}>
            {label}
          </label>
        )}
        <div className={styles["form__item-holder"]}>
          <select className={selectClassName} name={name} onChange={handleChange} value={value ? value : "all"}>
            {placeholder && (
              <option value="all" disabled aria-selected>
                {placeholder}
              </option>
            )}

            {options &&
              options.map((option, key) => (
                <option aria-selected key={key} value={option.value}>
                  {option.text}
                </option>
              ))}
          </select>
        </div>

        {isError && <div className={styles["error-message"]}>{isError && isError}</div>}
      </div>
    </React.Fragment>
  );
};

export { Dropdown };
