import * as React from "react";
import styles from "./text-area-component.module.scss";
import classNames from "classnames";
import Cross from "@assets/icons/cross.svg";
import Check from "@assets/icons/check.svg";
import { IconComponent } from "../icon";

export interface ITextAreaComponentProps {
  classModify?: string;
  errorMessage?: string;
  icon?: string;
  isError?: string;
  isSuccess?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
}

const TextAreaComponent = (props: ITextAreaComponentProps) => {
  const { name, placeholder, classModify, icon, label, isError, isSuccess } = props;
  const inputClassName = classNames("textarea", {
    [`textarea--${classModify}`]: classModify
  });
  const [value, setValue] = React.useState("");
  const wrapperClassnames = classNames({
    ["error"]: isError,
    ["isIcon"]: icon,
    ["success"]: isSuccess
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
    <div className={styles["text-area"]}>
      <React.Fragment>
        <div className={` ${styles["form__item"]} ${wrapperClassnames}`}>
          {label && (
            <label htmlFor="label" className={styles["form__item-label"]}>
              {label}
            </label>
          )}
          <div className={styles["form__item-holder"]}>
            <textarea
              onChange={handelChange}
              placeholder={placeholder}
              className={inputClassName}
              name={name}
              value={value}
            />
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

          {isError && <div className={styles["error-message"]}>{isError && isError}</div>}
        </div>
      </React.Fragment>
    </div>
  );
};

export { TextAreaComponent };
