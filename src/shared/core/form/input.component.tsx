import React, { useState } from "react";
import "./form.component.scss";
import styles from "./form-component.module.scss";
import classNames from "classnames";
import { IconComponent } from "@app/prep/modules-prep/core";
import Cross from "@assets/icons/cross.svg";
import Check from "@assets/icons/check.svg";

interface IInputProps {
  classModify?: string;
  errorMessage?: string;
  icon?: string;
  isError?: string;
  isSuccess?: boolean;
  label?: string;
  name: string;
  onClick?: any;
  placeholder?: string;
  type?: string;
}

const Input = (props: IInputProps) => {
  const { name, type, placeholder, classModify, icon, label, isError, isSuccess } = props;
  const inputClassName = classNames(styles["input"], {
    [styles[`input--${classModify}`]]: classModify
  });
  const [value, setValue] = useState("");
  const wrapperClassnames = classNames({
    [styles["error"]]: isError,
    [styles["isIcon"]]: icon,
    [styles["success"]]: isSuccess
  });
  const handelChange = (event: any) => {
    {
      setValue(event.target.value);
    }
  };

  const handelClear = () => {
    setValue("");
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
            onChange={handelChange}
            type={type ? type : "text"}
            placeholder={placeholder}
            className={inputClassName}
            name={name}
            value={value}
          />
          {icon && <IconComponent icon={icon} size={"15px"} />}
          {value && !isSuccess && (
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

        {isError && <div className={styles["error-message"]}>{isError}</div>}
      </div>
    </React.Fragment>
  );
};

export { Input };
