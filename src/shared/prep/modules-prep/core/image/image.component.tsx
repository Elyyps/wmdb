import * as React from "react";
import LazyLoad from "react-lazyload";

export interface IImageComponentProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  isBlocking?: boolean;
}
const ImageComponent = (
  props: IImageComponentProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
) => {
  const { isBlocking, ...other } = props;
  if (isBlocking) {
    return <img {...other} />;
  }

  return (
    <LazyLoad>
      <img {...other} />
    </LazyLoad>
  );
};

export { ImageComponent };
