import * as React from "react";
import styles from "./button-component.module.scss";
import { Link } from "react-router-dom";
import { IconComponent } from "@app/prep/modules-prep/core";
import ArrowDown from "@assets/icons/chevron-down.svg";
import classNames from "classnames";

export interface IButtonProps {
  fullWidth?: boolean;
  href?: string;
  icon?: string;
  iconStroke?: boolean;
  large?: boolean;
  onClick?: () => void;
  position?: string;
  target?: string;
  title: string;
  type?: string;
  variant?: string;
}

const Button = (props: IButtonProps) => {
  const { onClick, href, variant, target, title, type, icon, position, large, fullWidth, iconStroke, ...other } = props;
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
          {icon && <IconComponent icon={icon} size="14px" stroke={iconStroke ? iconStroke : true} />}
        </Link>
      ) : (
        <button
          style={{ width: fullWidth ? "100%" : "auto", padding: large ? "14px 26px" : "" }}
          onClick={onClick}
          {...other}
          type={type}
          className={buttonClassName}
        >
          <span>{title}</span>
          {icon && <IconComponent icon={icon} size="14px" stroke={iconStroke ? iconStroke : true} />}
          {variant === "dropdown" && (
            <div className={styles["button__arrow"]}>
              <IconComponent icon={ArrowDown} size={"12px"} stroke={iconStroke ? iconStroke : true} />
            </div>
          )}
        </button>
      )}
    </React.Fragment>
  );
};

export { Button };
