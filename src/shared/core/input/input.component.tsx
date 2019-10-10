import React, { useState, useEffect } from "react";

import styles from "./input-component.module.scss";
import classNames from "classnames";
import Cross from "@assets/icons/cross.svg";
import Check from "@assets/icons/check.svg";
import { IconComponent } from "@app/core/icon";

interface IInputProps {
  classModify?: string;
  errorMessage?: string;
  icon?: string;
  isError?: string;
  isSuccess?: boolean;
  label?: string;
  min?: number;
  name: string;
  onBlur?: (text: string) => void;
  onChange?: (text: string) => void;
  onClick?: any;
  placeholder?: string;
  type?: string;
  value?: any;
}

const Input = (props: IInputProps) => {
  const { name, type, placeholder, classModify, icon, label, errorMessage, isSuccess, value, min } = props;
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
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type={type ? type : "text"}
            placeholder={placeholder}
            className={inputClassName}
            name={name}
            value={values}
            min={min}
          />
          {icon && <IconComponent icon={icon} size={"15px"} />}
          {values && !isSuccess && (
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

        {errorMessage && <div className={styles["error-message"]}>{errorMessage}</div>}
      </div>
    </React.Fragment>
  );
};

export { Input };
