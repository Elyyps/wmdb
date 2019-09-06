import * as React from "react";
import ReactSVG from "react-svg";

export interface IIconComponentProps {
  color?: string;
  icon: any;
  size: string;
}

const IconComponent: React.FunctionComponent<IIconComponentProps> = props => (
  <ReactSVG
    src={props.icon}
    fallback={() => <span>Error!</span>}
    loading={() => <span />}
    renumerateIRIElements={false}
    style={{
      fill: props.color,
      height: props.size,
      width: props.size
    }}
    className={"icon-svg"}
  />
);

export { IconComponent };
