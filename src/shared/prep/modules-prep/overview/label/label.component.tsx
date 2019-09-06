import * as React from "react";
import style from "./label-component.module.scss";
import CLOSE from "@assets/icons/cross.svg";
import { IconComponent } from "@app/prep/modules-prep/core";

export interface ILabelComponentProps {
  label: string;
  onClick?: any;
}

const LabelComponent = ({ label, onClick }: ILabelComponentProps) => (
  <div className={style["label"]}>
    <span>{label}</span>
    <button className={style["label-close"]} onClick={onClick}>
      <IconComponent icon={CLOSE} size={"8px"} />
    </button>
  </div>
);

export { LabelComponent };
