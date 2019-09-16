import * as React from "react";
import { IconComponent } from "@app/prep/modules-prep/core";
import { getArrow } from "@app/constants/icons";

interface IBasicArrowProps {
  className?: string;
  customArrow?: JSX.Element;
  onClick?: () => void;
  prev?: boolean;
}

const BasicArrow = (props: IBasicArrowProps) => {
  const { className, onClick } = props;
  let result;
  const customStyle = "hero__slick-arrow-" + `${props.prev ? "prev" : "next"}`;
  if (props.customArrow === undefined) {
    result = (
      <button className={`${className} "slick-arrow" ${customStyle}`} style={{ display: "block" }} onClick={onClick}>
        <IconComponent icon={getArrow(props.prev)} size={"15px"} />
      </button>
    );
  } else {
    result = (
      <div className={className} onClick={onClick} role="button" aria-label="nextButton">
        {props.customArrow}
      </div>
    );
  }

  return result;
};
export { BasicArrow };
