import * as React from "react";
import styles from "./icon-component.module.scss";
import classNames from "classnames";
import ReactSVG from "react-svg";

export interface IconComponentProps {
  fillColor?: string;
  icon: any;
  size: string;
  strokeColor?: string;
  strokeWidth?: string;
}

const iconStyleClassName = (props: IconComponentProps) => {
  const { fillColor, strokeColor, strokeWidth } = props;

  const defaultStyle = "icon-svg";
  const fillClassName = typeof fillColor !== "undefined" ? styles[`${defaultStyle}--filled`] : "";
  const strokeWidthClassName = typeof strokeWidth !== "undefined" ? styles[`${defaultStyle}--stroke-width`] : "";
  const outlineClassName = typeof strokeColor !== "undefined" ? styles[`${defaultStyle}--outline`] : "";

  return classNames(styles[defaultStyle], fillClassName, outlineClassName, strokeWidthClassName);
};

const IconComponent: React.FunctionComponent<IconComponentProps> = props =>
  (
    <ReactSVG
      src={props.icon}
      fallback={() => <span>Error!</span>}
      loading={() => <span />}
      renumerateIRIElements={true}
      wrapper="span"
      style={{
        fill: props.fillColor,
        height: props.size,
        stroke: props.strokeColor,
        strokeWidth: props.strokeWidth,
        width: props.size
      }}
      className={iconStyleClassName(props)}
    />
  );
export { IconComponent };
