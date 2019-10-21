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
  onChange?: (value: number) => void;
  options?: IDropdownItem[];
  placeholder?: string;
  style?: any;
  value?: any;
}

const Dropdown = (props: IDropdownProps) => {
  const { name, options, style, placeholder, classModify, label, isError, value, isSuccess } = props;
  const [internalValue, setValue] = useState<number>(-1);
  const selectClassName = classNames(styles["dropdown"], {
    [styles[`dropdown--${classModify}`]]: classModify
  });

  const wrapperClassnames = classNames({
    ["error"]: isError,
    ["success"]: isSuccess
  });

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  const handleChange = (event: any) => {
    {
      if (props.onChange) {
        props.onChange(event.target.value);
      }
      setValue(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <div style={style} className={`${styles["form__item"]} ${wrapperClassnames}`}>
        {label && (
          <label htmlFor="label" className={styles["form__item-label"]}>
            {label}
          </label>
        )}
        <div className={styles["form__item-holder"]}>
          <select
            className={selectClassName}
            name={name}
            onChange={handleChange}
            value={internalValue ? internalValue : -1}
          >
            {placeholder && (
              <option value={-1} disabled aria-selected>
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
