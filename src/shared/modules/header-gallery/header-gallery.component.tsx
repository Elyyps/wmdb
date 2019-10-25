import * as React from "react";
import styles from "./header-gallery-component.module.scss";
import { IconComponent } from "@app/core/icon";
import { ImageComponent } from "@app/core/image";
import IconImage from "@assets/icons/images.svg";
import IconPlay from "@assets/icons/play.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { getArrow } from "@app/constants/icons";
import { ILink } from "@app/api/core/link";
import { Breadcrumb } from "@app/core/breadcrumb";

export interface IHeaderGalleryComponentProps {
  images: string[];
}

const BreadcrumbsData: ILink[] = [
  {
    title: "Home",
    url: "#"
  },
  {
    title: "Citygames in Amsterdam",
    url: "#"
  },
  {
    title: "Wie is de mol?",
    url: ""
  }
];

const HeaderGalleryComponent = (props: IHeaderGalleryComponentProps) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const smallImagesStart = 2;
  // React.useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    }
  };

  React.useEffect(() => {
    currentImage >= props.images.length && setCurrentImage(0);
    currentImage < 0 && setCurrentImage(props.images.length - 1);
  }, [currentImage]);

  return (
    <div className={styles["header-gallery"]}>
      <div className="uk-container">
        <Breadcrumb breadcrumbs={BreadcrumbsData} />
        <div className={styles["header-gallery__container"]}>
          <div className={`${styles["header-gallery__col"]} ${styles["large"]}`}>
            <div className={styles["header-gallery__slider_images"]}>
              <AliceCarousel
                onSlideChanged={e => setCurrentImage(e.slide)}
                dotsDisabled
                startIndex={currentImage}
                responsive={responsive}
                infinite={true}
                buttonsDisabled
                items={props.images.map((item: string, key: number) => (
                  <ImageComponent src={item} key={key} />
                ))}
              />
              <div className={styles["header-gallery__slider_arrows"]}>
                <div
                  className={styles["header-gallery__slider_arrows_prev"]}
                  onClick={() => setCurrentImage(currentImage - 1)}
                  role="button"
                >
                  <IconComponent icon={getArrow(true)} size={"8px"} strokeColor={"white"} fillColor={"none"} />
                </div>
                <div
                  className={styles["header-gallery__slider_arrows_next"]}
                  onClick={() => setCurrentImage(currentImage + 1)}
                  role="button"
                >
                  <IconComponent icon={getArrow(false)} size={"8px"} strokeColor={"white"} fillColor={"none"} />
                </div>
              </div>
            </div>
            <div className={`${styles["header-gallery__info"]} ${"uk-visible@l"}`}>
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
                  <div className={` ${styles["header-gallery__col-card"]} uk-width-1-1`} style={{ cursor: "pointer" }}>
                    <ImageComponent src={props.images[1]} onClick={() => setCurrentImage(1)} />
                  </div>
                  {props.images.slice(smallImagesStart, props.images.length).map((value: string, key: number) => (
                    <div
                      className={` ${styles["header-gallery__col-cards"]} uk-width-1-2@s`}
                      key={key}
                      style={{ cursor: "pointer" }}
                    >
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
