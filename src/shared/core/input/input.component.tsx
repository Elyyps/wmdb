import React, { useState, useEffect } from "react";

import styles from "./input-component.module.scss";
import classNames from "classnames";
import Cross from "@assets/icons/cross.svg";
import Check from "@assets/icons/check.svg";
import { IconComponent } from "@app/core/icon";

interface IInputProps {
  classModify?: string;
  errorMessage?: string;
  hasCross?: boolean;
  icon?: string;
  isError?: string;
  isRequired?: boolean;
  isSuccess?: boolean;
  label?: string;
  max?: number;
  maxLength?: number;
  min?: number;
  name: string;
  onBlur?: (text: string) => void;
  onChange?: (event: any) => void;
  onChangeText?: (text: string) => void;
  onClick?: any;
  placeholder?: string;
  style?: any;
  type?: string;
  value?: any;
}

const Input = (props: IInputProps) => {
  const {
    name,
    hasCross,
    type,
    style,
    placeholder,
    classModify,
    maxLength,
    icon,
    label,
    errorMessage,
    isSuccess,
    value,
    min,
    max,
    isRequired
  } = props;
  const inputClassName = classNames(styles["input"], {
    [styles[`input--${classModify}`]]: classModify
  });
  const [values, setValues] = useState("");
  const wrapperClassnames = classNames({
    [styles["error"]]: errorMessage,
    [styles["isIcon"]]: icon,
    [styles["success"]]: isSuccess
  });
  useEffect(() => {
    setValues(value);
  }, [value]);
  const handleChange = (event: any) => {
    if (props.onChangeText) {
      props.onChangeText(event.target.value);
    }
    if (props.onChange) {
      props.onChange(event);
    }
    if (typeof value !== undefined) {
      setValues(event.target.value);
    }
  };
  const handleBlur = (event: any) => {
    if (props.onBlur) {
      props.onBlur(event);
    }
    if (typeof value !== undefined) {
      setValues(event.target.value);
    }
  };
  const handelClear = () => {
    setValues("");
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
          {icon && (
            <div className={styles["form-icon"]}>
              <IconComponent icon={icon} size={"15px"} />
            </div>
          )}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type={type ? type : "text"}
            className={inputClassName}
            name={name}
            maxLength={maxLength}
            step={1}
            value={values}
            style={style}
            min={min}
            max={max}
          />
          {!values && (
            <span
              className={`${styles["form__item-placeholder"]} ${styles[icon ? "form__item-placeholder-icon" : ""]}`}
            >
              {placeholder}
              {isRequired && <span style={{ color: "red" }}>*</span>}
            </span>
          )}

          {values && !isSuccess && hasCross && (
            <div role={"button"} className={styles["form__item-icon"]} onClick={handelClear}>
              <IconComponent icon={Cross} size={"10px"} />
            </div>
          )}
          {isSuccess && (
            <div className={styles["form__item-icon"]}>
              <IconComponent icon={Check} size={"10px"} />
            </div>
          )}
        </div>

        <div className={styles["error-message"]}>{errorMessage}</div>
      </div>
    </React.Fragment>
  );
};

export { Input };
