import * as React from "react";
import styles from "./image-component.module.scss";
import ReactSVG from "react-svg";
import IconDefault from "@assets/icons/images.svg";
import LazyLoad from "react-lazyload";
import { IconComponent } from "../icon";

export interface IImageComponentProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  className?: string;
  errorImage?: string;
  errorMessage?: string | true;
  isBlocking?: boolean;
}
const OFFSET_LAZYLOADING = 200;

const ImageComponent = (
  props: IImageComponentProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
) => {
  const { errorImage, errorMessage, isBlocking, className, ...other } = props;

  const style = `${styles["svg-class"]} ${className}`;
  const computedErrorMessage = errorMessage === true ? "Kan afbeelding niet laden." : errorMessage;
  const computedErrorImage = errorImage || IconDefault;

  if (!other.src) {
    return (
      <div className={styles["placeholder"]}>
        <IconComponent icon={computedErrorImage} size="32px" />
        {computedErrorMessage && <span className={styles["placeholder-text"]}>{computedErrorMessage}</span>}
      </div>
    );
  }
  if (isBlocking) {
    return other.src.includes("svg") ? (
      <ReactSVG
        fallback={() => <span>Error!</span>}
        loading={() => <span />}
        renumerateIRIElements={true}
        src={other.src}
        className={style}
      />
    ) : (
      <img className={className} {...other} />
    );
  }

  return (
    <LazyLoad offset={OFFSET_LAZYLOADING}>
      {other.src.includes("svg") ? (
        <ReactSVG fallback={() => <span>Error!</span>} loading={() => <span />} src={other.src} className={style} />
      ) : (
        <img className={className} {...other} />
      )}
    </LazyLoad>
  );
};

export { ImageComponent };
