import * as React from "react";
import styles from "./gallery-component.module.scss";
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
import ReactAliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export interface IGalleryComponentProps {
  headerGallery: IHeaderGallery[];
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
let activeNumber = 0;

const GalleryComponent = ({ headerGallery }: IGalleryComponentProps) => {
  const [lightBoxOpen, setLightBoxOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [dots, setDots] = React.useState<any>("");
  const contentHeight = 50;
  const [buttonActive, setButtonActive] = React.useState<"image" | "video">("image");
  const [windowSize, setWindowSize] = React.useState(0);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  React.useEffect(() => {
    handleResize();
  }, [windowSize]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (newSlide: number) => {
    setCurrentSlide(newSlide);
    setLightBoxOpen(!lightBoxOpen);
  };
  const findFirstElement = (type: "video" | "image") => {
    const firstElement = headerGallery.find(item => item.type === type);
    firstElement && setCurrentSlide(firstElement.id);
    setButtonActive(type);
  };

  const getDots = () => {
    const list = [];
    const numberOfDots = 4;
    activeNumber === numberOfDots && (activeNumber = 0);
    for (let i = 0; i < numberOfDots; i += 1) {
      list.push(<li style={activeNumber === i ? { height: "12px", width: "2px" } : { height: "10px" }} />);
    }
    activeNumber += 1;

    return <ul>{list}</ul>;
  };
  const findSlide = (id: number) => {
    const slide = headerGallery.find(item => item.id === id);

    return slide ? slide : headerGallery[0];
  };

  const onButtonClick = (newImage: number) => {
    setCurrentSlide(newImage);
  };
  const responsive = {
    1200: {
      items: 5
    },
    639: {
      items: 3
    },
    0: {
      items: 1
    }
  };

  React.useEffect(() => {
    currentSlide >= headerGallery.length && setCurrentSlide(0);
    currentSlide < 0 && setCurrentSlide(headerGallery.length - 1);
    setDots(getDots());
  }, [currentSlide]);

  return (
    <div className={styles["gallery"]}>
      <div className="uk-container">
        <Breadcrumb breadcrumbs={BreadcrumbsData} />

        <div className={styles["gallery-images"]}>
          <ReactAliceCarousel
            onSlideChanged={e => onButtonClick(e.item)}
            buttonsDisabled
            dotsDisabled
            responsive={responsive}
            startIndex={!lightBoxOpen ? currentSlide : 0}
            items={headerGallery.map((slide, key) => (
              <div
                role="button"
                key={key}
                className={styles["gallery-images-item"]}
                onClick={() => {
                  handleClick(slide.id);
                }}
              >
                {slide.type === "image" ? (
                  <ImageComponent src={slide.url} />
                ) : slide.type === "video" ? (
                  <ReactPlayer
                    style={{ pointerEvents: "none" }}
                    url={slide.url}
                    height={"100%"}
                    width={"100%"}
                    controls
                    light
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          />
          <div className={styles["gallery__dots"]}>{dots}</div>
          <div className={` ${styles["gallery__slider_arrows"]} uk-visible@s`}>
            <div
              className={styles["gallery__slider_arrows_prev"]}
              onClick={() => setCurrentSlide(currentSlide - 1)}
              role="button"
            >
              <IconComponent icon={getArrow(true)} size={"8px"} fillColor={"white"} />
            </div>
            <div
              className={styles["gallery__slider_arrows_next"]}
              onClick={() => setCurrentSlide(currentSlide + 1)}
              role="button"
            >
              <IconComponent icon={getArrow(false)} size={"8px"} fillColor={"white"} />
            </div>
          </div>
        </div>
        <div className={`${styles["gallery__info"]} uk-visible@s`}>
          <div className={styles["slider-info"]}>
            <div
              role="button"
              className={styles["photo"]}
              style={{ cursor: "pointer", color: buttonActive === "image" ? "#34aadf" : "black" }}
              onClick={() => findFirstElement("image")}
            >
              <IconComponent
                icon={IconImage}
                size={"15px"}
                fillColor={buttonActive === "image" ? "#34aadf" : "black"}
              />
              Foto’s ({headerGallery.length})
            </div>
            <div
              role="button"
              style={{ cursor: "pointer", color: buttonActive === "video" ? "#34aadf" : "black" }}
              onClick={() => findFirstElement("video")}
            >
              <IconComponent icon={IconPlay} size={"12px"} fillColor={buttonActive === "video" ? "#34aadf" : "black"} />
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
              {findSlide(currentSlide).type === "image" ? (
                <ImageComponent src={findSlide(currentSlide).url} />
              ) : (
                findSlide(currentSlide).type === "video" && (
                  <div className={styles["gallery__lightbox-item-video"]}>
                    <ReactPlayer url={findSlide(currentSlide).url} width={"100%"} height={"100%"} controls />
                  </div>
                )
              )}
            </div>

            <div className={styles["gallery__lightbox-arrows"]}>
              <div
                className={styles["gallery__lightbox-arrows-prev"]}
                onClick={() => setCurrentSlide(currentSlide - 1)}
                role="button"
              >
                <IconComponent icon={getArrow(true)} size={"8px"} fillColor={"white"} />
              </div>

              <div
                className={styles["gallery__lightbox-arrows-next"]}
                onClick={() => setCurrentSlide(currentSlide + 1)}
                role="button"
              >
                <IconComponent icon={getArrow(false)} size={"8px"} fillColor={"white"} />
              </div>
            </div>
          </div>
        </LightBoxComponent>
      )}
    </div>
  );
};

export { GalleryComponent };
