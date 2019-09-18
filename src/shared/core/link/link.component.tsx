import * as React from "react";
import styles from "./link-component.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IconComponent } from "../icon";

export interface ILinkComponentProps {
  animated?: boolean;
  children: any;
  icon?: string;
  target?: string;
  to: string;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
}
export interface ILink {
  title: string;
  url: string;
}
const LinkComponent = (props: ILinkComponentProps) => {
  const { icon, to, target, variant, animated } = props;
  const defaultVariant = variant || "primary";
  const linkClassName = classNames(
    styles["link"],

    styles[`link--${defaultVariant}`],
    { [styles["link--animated"]]: animated }
  );

  return (
    <Link target={target} className={linkClassName} to={to ? to : ""}>
      {props.children}
      {icon && <IconComponent icon={icon} size="14px" />}
    </Link>
  );
};

export { LinkComponent };
