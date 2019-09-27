import React from "react";
import Slider, { Settings } from "react-slick";
import { BasicArrow } from "./basic-arrow.component";
import { ImageComponent } from "@app/core/image";

export interface IGallerySliderComponentProps {
  currentIndex: number;
  images: string[];
}

const GallerySliderComponent = ({ currentIndex, images }: IGallerySliderComponentProps) => {
  const ref: any = React.createRef();

  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    prevArrow: <BasicArrow prev={true} />,
    nextArrow: <BasicArrow />,
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
    speed: 500,
    initialSlide: currentIndex
  };

  return (
    <Slider ref={ref} {...settings} initialSlide={currentIndex}>
      {images.map((item: string, key: number) => (
        <ImageComponent src={item} key={key} />
      ))}
    </Slider>
  );
};

export { GallerySliderComponent };
