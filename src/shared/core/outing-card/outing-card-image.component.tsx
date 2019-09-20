import * as React from "react";
import styles from "./outing-card-component.module.scss";
import Slider, { Settings } from "react-slick";
import { ImageComponent } from "../image";

interface ICardPostImageProps {
  images: string[];
}

const OutingCardImage = ({ images }: ICardPostImageProps) => {
  const ref: any = React.createRef();
  ref.current = "slick";

  const settings: Settings = {
    dots: false,
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
  const [currentImage, setCurrentImage] = React.useState<string>(images[0]);

  return (
    <div
      className={`${styles["card-images__wrapper"]} ${
        images.length >= numberSlide ? styles["card-images__wrapper--large"] : ""
      }`}
    >
      <div className={styles["card-images"]}>
        <Slider ref={ref} {...settings}>
          <ImageComponent src={currentImage} />
        </Slider>
      </div>
      {images.length >= numberSlide ? (
        <div className={`${styles["card-images__grid"]} uk-visible@s `}>
          {images.slice(0, numberSlide).map((item: string, key: number) => (
            <div
              key={key}
              className={styles["card-image"]}
              onMouseEnter={() => setCurrentImage(item)}
              onMouseLeave={() => setCurrentImage(images[0])}
            >
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

export { OutingCardImage };
