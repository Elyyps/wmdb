import * as React from "react";
import styles from "./button-component.module.scss";
import { Link } from "react-router-dom";
import ArrowDown from "@assets/icons/chevron-down.svg";
import classNames from "classnames";
import { IconComponent } from "@app/core/icon";

export interface IButtonProps {
  fullWidth?: boolean;
  href?: string;
  icon?: string;
  iconStroke?: boolean;
  large?: boolean;
  onClick?: () => void;
  position?: "right" | "left";
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
          {icon && <IconComponent icon={icon} size="14px" strokeColor="black" />}
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
          {icon && <IconComponent icon={icon} size="14px" strokeColor="black" />}
          {variant === "dropdown" && (
            <div className={styles["button__arrow"]}>
              <IconComponent icon={ArrowDown} size={"12px"} strokeColor="black" />
            </div>
          )}
        </button>
      )}
    </React.Fragment>
  );
};

export { Button };
