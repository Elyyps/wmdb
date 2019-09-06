import * as React from "react";
import "./card-post.component.scss";
import { ImageComponent } from "@app/prep/modules-prep/core";
import Slider, { Settings } from "react-slick";

interface ICardPostImageProps {
  images: string[];
}

const CardPostImage = ({ images }: ICardPostImageProps) => {
  const ref: any = React.createRef();
  ref.current = "slick";

  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ],
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
  };

  const numberSlide = 3;

  return (
    <div className={`card-images__wrapper ${images.length >= numberSlide ? "card-images__wrapper--large" : ""}`}>
      <div className="card-images">
        <Slider ref={ref} {...settings}>
          {images.slice(0, numberSlide).map((item: string, key: number) => (
            <div key={key}>
              <ImageComponent src={item} />
            </div>
          ))}
        </Slider>
      </div>
      {images.length >= numberSlide ? (
        <div className="card-images__grid uk-visible@s">
          {images.slice(0, numberSlide).map((item: string, key: number) => (
            <div key={key} className="card-image">
              <ImageComponent src={item} />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { CardPostImage };
