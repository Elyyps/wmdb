import * as React from "react";
import styles from "./button-component.module.scss";
import { Link } from "react-router-dom";
import ArrowDown from "@assets/icons/chevron-down.svg";
import classNames from "classnames";
import { IconComponent } from "@app/core/icon";
import path from "path";

export interface IButtonProps {
  fullWidth?: boolean;
  href?: string;
  icon?: string;
  iconStroke?: boolean;
  large?: boolean;
  onClick?: () => void;
  position?: "right" | "left";
  stateLink?: any;
  target?: string;
  title: string;
  type?: string;
  variant?: string;
}

const Button = (props: IButtonProps) => {
  const { onClick, href, variant, target, title, type, icon, position, large, fullWidth, iconStroke, ...other } = props;
  const classModify = variant || "default";
  const buttonClassName = classNames(styles["button"], {
    [styles[`button--${classModify}`]]: classModify
  });
  const renderIconMargin = (margin = "right") => {
    let newMargin = "";
    if (title) {
      newMargin = margin;
    }

    return (
      <span className={styles[`icon-${newMargin}`]}>
        <IconComponent icon={icon} size="14px" strokeColor="black" fillColor="transparent" />
      </span>
    );
  };

  return (
    <React.Fragment>
      {href ? (
        <Link {...other} to={{ pathname: href, state: props.stateLink }} className={buttonClassName} target={target}>
          <span className={styles["icon-svg"]}>
            {((icon && position === "right") || (icon && !position)) && title}
            {icon ? renderIconMargin(position) : title}
            {icon && position === "left" && title}
          </span>
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
