import * as React from "react";
import styles from "./gallery-component.module.scss";
import Slider, { Settings } from "react-slick";
import { ImageComponent } from "@app/core/image";
import { ILink } from "@app/api/core/link";
import { Breadcrumb } from "@app/core/breadcrumb";
import { IconComponent } from "@app/core/icon";
import IconImage from "@assets/icons/images.svg";
import IconPlay from "@assets/icons/play.svg";
import { getArrow } from "@app/constants/icons";
import ReactPlayer from "react-player";
import { IHeaderGallery } from "@app/api/modules/header-gallery/header-gallery";
import { LightBoxComponent } from "@app/core/lightbox";

export interface IGalleryComponentProps {
  galleryModule: IHeaderGallery[];
}
const BreadcrumbsData: ILink[] = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Citygames in Amsterdam",
    url: "/overzicht"
  },
  {
    title: "Wie is de mol?",
    url: ""
  }
];
const GalleryComponent = ({ galleryModule }: IGalleryComponentProps) => {
  const [lightBoxOpen, setLightBoxOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState<IHeaderGallery | undefined>(undefined);
  const ref: any = React.createRef();
  const contentHeight = 50;
  ref.current = "slick";

  const settings: Settings = {
    nextArrow: (
      <button className={styles["gallery__slick-right-arrow"]} style={{ backgroundColor: "red" }}>
        <IconComponent icon={getArrow(false)} size={"8px"} fillColor={"white"} />
      </button>
    ),
    prevArrow: (
      <button className={styles["gallery__slick-left-arrow"]}>
        <IconComponent icon={getArrow(true)} size={"8px"} fillColor={"white"} />
      </button>
    ),
    dots: false,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          arrows: false,
          dots: true,

          slidesToShow: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      }
    ],
    slidesToScroll: 1,
    slidesToShow: 5,
    speed: 500
  };
  const handleClick = (slide: IHeaderGallery) => {
    setCurrentSlide(slide);
    setLightBoxOpen(!lightBoxOpen);
  };

  return (
    <div className={styles["gallery"]}>
      <div className="uk-container">
        <Breadcrumb breadcrumbs={BreadcrumbsData} />
        <div className={styles["gallery-images"]}>
          <Slider ref={ref} {...settings}>
            {galleryModule.map((slide, key) => (
              <div
                role="button"
                key={key}
                className={styles["gallery-images-item"]}
                onClick={() => {
                  handleClick(slide);
                }}
              >
                {slide.type === "image" ? (
                  <ImageComponent src={slide.url} />
                ) : (
                  slide.type === "video" && (
                    <ReactPlayer style={{ pointerEvents: "none" }} url={slide.url} height={"100%"} width={"100%"} />
                  )
                )}
              </div>
            ))}
          </Slider>
        </div>
        <div className={`${styles["gallery__info"]} uk-visible@s`}>
          <div className={styles["slider-info"]}>
            <div className={styles["photo"]}>
              <IconComponent icon={IconImage} size={"15px"} />
              Foto’s ({galleryModule.length})
            </div>
            <div role="button" className={styles["video"]} onClick={() => handleClick(galleryModule[6])}>
              <IconComponent icon={IconPlay} size={"12px"} />
              Video
            </div>
          </div>
        </div>
      </div>

      {lightBoxOpen && currentSlide !== undefined && (
        <LightBoxComponent
          heightLightBoxContent={contentHeight}
          isLightBoxOpen={lightBoxOpen}
          setLightBoxOpen={() => setLightBoxOpen(!lightBoxOpen)}
        >
          <div className={styles["gallery__lightbox"]}>
            <div className={styles["gallery__lightbox-item"]}>
              {currentSlide.type === "image" ? (
                <ImageComponent src={currentSlide.url} />
              ) : (
                currentSlide.type === "video" && (
                  <div className={styles["gallery__lightbox-item-video"]}>
                    <ReactPlayer url={currentSlide.url} width={"100%"} height={"100%"} />
                  </div>
                )
              )}
            </div>

            <div className={styles["gallery__lightbox-arrows"]}>
              {currentSlide.id !== 0 && (
                <div
                  className={styles["gallery__lightbox-arrows-prev"]}
                  onClick={() => setCurrentSlide(galleryModule[currentSlide.id - 1])}
                  role="button"
                >
                  <IconComponent icon={getArrow(true)} size={"8px"} fillColor={"white"} />
                </div>
              )}
              {currentSlide.id + 1 < galleryModule.length && (
                <div
                  className={styles["gallery__lightbox-arrows-next"]}
                  onClick={() => setCurrentSlide(galleryModule[currentSlide.id + 1])}
                  role="button"
                >
                  <IconComponent icon={getArrow(false)} size={"8px"} fillColor={"white"} />
                </div>
              )}
            </div>
          </div>
        </LightBoxComponent>
      )}
    </div>
  );
};

export { GalleryComponent };
