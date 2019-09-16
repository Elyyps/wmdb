import React, { useState } from "react";
import classNames from "classnames";
import "./form.component.scss";

interface ISelectProps {
  classModify?: string;
  errorMessage?: string;
  isError?: string;
  isSuccess?: boolean;
  label?: string;
  name: string;
  options?: any[];
  placeholder?: string;
}

const Select = (props: ISelectProps) => {
  const { name, options, placeholder, classModify, label, isError, isSuccess } = props;
  const selectClassName = classNames("select", {
    [`select--${classModify}`]: classModify
  });

  const wrapperClassnames = classNames({
    ["error"]: isError,
    ["success"]: isSuccess
  });

  const [value, setValue] = useState("");

  const handelChange = (event: any) => {
    {
      setValue(event.target.value);
    }
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
          <select className={selectClassName} name={name} onChange={handelChange} value={value ? value : "all"}>
            {placeholder && (
              <option value="all" disabled aria-selected>
                {placeholder}
              </option>
            )}

            {options &&
              options.map((option, key) => (
                <option aria-selected key={key} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </div>

        {isError ? <div className="error-message">{isError ? isError : ""}</div> : " "}
      </div>
    </React.Fragment>
  );
};

export { Select };
