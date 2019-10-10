import * as React from "react";
import styles from "./button-component.module.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/prep/modules-prep/core";
import ArrowDown from "@assets/icons/chevron-down.svg";
import classNames from "classnames";

export interface IButtonProps {
  children?: any;
  fullWidth?: boolean;
  href?: string;
  icon?: any;
  onClick?: any;
  position?: string;
  target?: string;
  title: string;
  type?: string;
  variant?: string;
}

const Button = (props: IButtonProps) => {
  const { onClick, href, variant, target, title, type, icon, position, fullWidth, ...other } = props;
  const classModify = variant || "default";
  const buttonClassName = classNames(styles["button"], {
    [styles[`button--${classModify}`]]: classModify,
    [styles[`button--icon-${position}`]]: position
  });

  return (
    <React.Fragment>
      {href ? (
        <Link {...other} to={href} className={buttonClassName} target={target}>
          <span>{title}</span>
          {icon && <IconComponent icon={icon} size="14px" />}
        </Link>
      ) : (
        <button
          style={{ width: fullWidth ? "100%" : "auto" }}
          onClick={onClick}
          {...other}
          type={type}
          className={buttonClassName}
        >
          <span>{title}</span>
          {icon && <IconComponent icon={icon} size="14px" />}
          {variant === "dropdown" && (
            <div className={styles["button__arrow"]}>
              <IconComponent icon={ArrowDown} size={"12px"} />
            </div>
          )}
        </button>
      )}
    </React.Fragment>
  );
};

export { Button };
