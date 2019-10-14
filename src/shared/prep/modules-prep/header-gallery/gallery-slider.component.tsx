import React from "react";
import "./header-gallery-component.scss";
import { ImageComponent } from "@app/core/image";
import Slider, { Settings } from "react-slick";
import { BasicArrow } from "./basic-arrow.component";
import { SliderImages } from "../../pages-prep/single-wmdb/dummy-data";

export interface IGallerySliderComponentProps {
  afterChange: any;
}

const GallerySliderComponent = ({ afterChange }: IGallerySliderComponentProps) => {
  const ref: any = React.createRef();
  ref.current = "slick";

  const settings: Settings = {
    dots: false,
    arrows: true,
    nextArrow: <BasicArrow />,
    prevArrow: <BasicArrow prev={true} />,
    infinite: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          dots: true,
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ],
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
  };

  return (
    <Slider ref={ref} {...settings} className="gallery" afterChange={afterChange}>
      {SliderImages ? SliderImages.map((item: string, key: number) => <ImageComponent src={item} key={key} />) : null}
    </Slider>
  );
};

export { GallerySliderComponent };
