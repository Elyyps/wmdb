import * as React from "react";
import styles from "./link-component.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IconComponent } from "../icon";

export interface ILinkComponentProps {
  animated?: boolean;
  children: any;
  icon?: string;
  isExternalLink?: boolean;
  target?: string;
  to: string;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
}
const LinkComponent = (props: ILinkComponentProps) => {
  const { icon, to, target, variant, animated, isExternalLink } = props;
  const defaultVariant = variant || "primary";
  const linkClassName = classNames(
    styles["link"],

    styles[`link--${defaultVariant}`],
    { [styles["link--animated"]]: animated }
  );

  return (
    <React.Fragment>
      {isExternalLink ? (
        <a href={to}>{props.children}</a>
      ) : (
        <Link target={target} className={linkClassName} to={to ? to : ""}>
          {props.children}
          {icon && <IconComponent icon={icon} size="14px" />}
        </Link>
      )}
    </React.Fragment>
  );
};

export { LinkComponent };
