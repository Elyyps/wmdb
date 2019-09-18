import React, { useState } from "react";
import "./form.component.scss";
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
  placeholder?: string;
}

const TextArea = (props: IInputProps) => {
  const { name, placeholder, classModify, icon, label, isError, isSuccess } = props;
  const inputClassName = classNames("textarea", {
    [`textarea--${classModify}`]: classModify
  });
  const [value, setValue] = useState("");
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
    <React.Fragment>
      <div className={`form__item ${wrapperClassnames}`}>
        {label ? (
          <label htmlFor="label" className="form__item-label">
            {label}
          </label>
        ) : (
          ""
        )}
        <div className="form__item-holder">
          <textarea
            onChange={handelChange}
            placeholder={placeholder}
            className={inputClassName}
            name={name}
            value={value}
          />
          {value && !isSuccess ? (
            <div role={"button"} className="form__item-icon" onClick={handelClear}>
              <IconComponent icon={Cross} size={"10px"} />
            </div>
          ) : (
            ""
          )}
          {isSuccess ? (
            <div className="form__item-icon">
              <IconComponent icon={Check} size={"10px"} />
            </div>
          ) : (
            ""
          )}
        </div>

        {isError ? <div className="error-message">{isError ? isError : ""}</div> : " "}
      </div>
    </React.Fragment>
  );
};

export { TextArea };
