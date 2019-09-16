import React from "react";
import "./expand-block-component.scss";
import { Button, IButtonProps } from "@app/prep/modules-prep/core";

export interface IExpandButtonProps {
  button: IButtonProps;
  isOpen: boolean;
  modify?: string;
  onClick: any;
}

const ExpandButton = ({ isOpen, button, onClick, modify }: IExpandButtonProps) => (
  <>
    {isOpen ? (
      ""
    ) : (
      <div className={modify}>
        <Button {...button} onClick={onClick} />
      </div>
    )}
  </>
);

export { ExpandButton };
