import * as React from "react";
import styles from "./header-gallery-component.module.scss";
import { IconComponent } from "@app/core/icon";
import { ImageComponent } from "@app/core/image";
import IconImage from "@assets/icons/images.svg";
import IconPlay from "@assets/icons/play.svg";
import Slider, { Settings } from "react-slick";
import { BasicArrow } from "./basic-arrow.component";

export interface IHeaderGalleryComponentProps {
  images: string[];
}

const HeaderGalleryComponent = (props: IHeaderGalleryComponentProps) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const smallImagesStart = 2;
  const handleChange = (prev: number, next: number) => {
    if (next === 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  React.useEffect(() => {
    currentImage >= props.images.length && setCurrentImage(0);
    currentImage < 0 && setCurrentImage(props.images.length - 1);
  }, [currentImage]);

  const ref: any = React.createRef();
  ref.current = "slick";

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
    speed: 500
  };

  return (
    <div className={styles["header-gallery"]}>
      <div className="uk-container">
        <div className={styles["header-gallery__container"]}>
          <div className={`${styles["header-gallery__col"]} ${styles["large"]}`}>
            <Slider ref={ref} {...settings} beforeChange={handleChange}>
              {props.images.slice(currentImage, props.images.length).map((item: string, key: number) => (
                <ImageComponent src={item} key={key} />
              ))}
            </Slider>
            <div className={` ${styles["header-gallery__info"]} ${"uk-visible@l"} `}>
              <div className={styles["slider-info"]}>
                <div className={styles["photo"]}>
                  <IconComponent icon={IconImage} size={"15px"} />
                  Foto’s ({currentImage + 1}/{props.images.length})
                </div>
                <div className={styles["video"]}>
                  <IconComponent icon={IconPlay} size={"12px"} />
                  Video
                </div>
              </div>
            </div>
          </div>
          <div className={` ${styles["header-gallery__col"]} ${styles["small"]} ${"uk-visible@l"} `}>
            <div className={` uk-grid ${styles["uk-grid-small"]} data-uk-margin `}>
              {
                <>
                  <div className="uk-width-1-1" style={{ cursor: "pointer" }}>
                    <ImageComponent src={props.images[1]} onClick={() => setCurrentImage(1)} />
                  </div>
                  {props.images.slice(smallImagesStart, props.images.length).map((value: string, key: number) => (
                    <div className="uk-width-1-2@s" key={key} style={{ cursor: "pointer" }}>
                      <ImageComponent src={value} onClick={() => setCurrentImage(key + smallImagesStart)} />
                    </div>
                  ))}
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderGalleryComponent };
