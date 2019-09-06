import React from "react";
import classNames from "classnames";
import "./expand-block-component.scss";
import { IconComponent, ListCheckComponent } from "@app/prep/modules-prep/core";
import CLOSE from "@assets/icons/cross.svg";

export interface IExpandBlockProps {
  children?: any;
  isOpen: boolean;
  modify?: string;
  onClick?: any;
  title?: string;
}

const ExpandBlock = ({ children, isOpen, title, onClick, modify }: IExpandBlockProps) => {
  const styleOpen = isOpen ? "show" : "hide";
  const classModify = classNames("expand-block", styleOpen, modify);

  return (
    <div className={classModify}>
      <div className="expand-block__head uk-hidden@m">
        <div className="expand-block__title">
          <button onClick={onClick} className="expand-block__close">
            <IconComponent icon={CLOSE} size={"16px"} />
          </button>
          <h5>{title}</h5>
        </div>
        <div className="expand-block__panel">
          <ListCheckComponent labels={["Kwalitatief aanbod van uitjes"]} />
        </div>
      </div>
      {children}
    </div>
  );
};

export { ExpandBlock };
