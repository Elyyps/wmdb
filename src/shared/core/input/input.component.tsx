import React, { useState } from "react";

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
  name: string;
  onChange?: (text: string) => void;
  onClick?: any;
  placeholder?: string;
  type?: string;
  value?: string;
}

const Input = (props: IInputProps) => {
  const { name, type, placeholder, classModify, value, icon, label, isError, isSuccess } = props;
  const inputClassName = classNames(styles["input"], {
    [styles[`input--${classModify}`]]: classModify
  });
  const [valueLocal, setValueLocal] = useState("");
  const wrapperClassnames = classNames({
    [styles["error"]]: isError,
    [styles["isIcon"]]: icon,
    [styles["success"]]: isSuccess
  });
  const handleChange = (event: any) => {
    {
      setValueLocal(event.target.value);
      if (props.onChange) {
        props.onChange(event.target.value);
      }
    }
  };

  React.useEffect(() => {
    if (value !== undefined) setValueLocal(value);
  }, [value]);

  const handelClear = () => {
    setValueLocal("");
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
            type={type ? type : "text"}
            placeholder={placeholder}
            className={inputClassName}
            name={name}
            value={valueLocal}
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
