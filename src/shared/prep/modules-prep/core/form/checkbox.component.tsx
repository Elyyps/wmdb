import * as React from "react";
import "./form.component.scss";

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
    <label htmlFor={name} className={"checkbox-label"}>
      <input
        checked={isChecked}
        type="checkbox"
        name={name}
        className={"checkbox"}
        aria-checked="false"
        id={name}
        onChange={onChange}
        value={value}
      />
      {label}
      {count ? <span className="checkbox-count">({count})</span> : ""}
    </label>
  </React.Fragment>
);

export { Checkbox };
