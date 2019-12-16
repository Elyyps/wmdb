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
import { IHeaderGallery } from "@app/api/modules/header-gallery/header-gallery";
import ReactPlayer from "react-player";
import { LightBoxComponent } from "@app/core/lightbox";

export interface IHeaderGalleryComponentProps {
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

const HeaderGalleryComponent = ({ headerGallery }: IHeaderGalleryComponentProps) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [videoIsPlaying, setVideoIsPlaying] = React.useState(false);
  const [buttonActive, setButtonActive] = React.useState<"image" | "video">("image");
  const smallImagesStart = 2;
  const [windowSize, setWindowSize] = React.useState(0);
  const [lightBoxOpen, setLightBoxOpen] = React.useState(false);
  const [dots, setDots] = React.useState<any>("");
  const contentHeight = 50;
  const mobileSize = 640;
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    }
  };

  const onVideoClick = () => {
    setVideoIsPlaying(true);
  };
  const onButtonClick = (newImage: number) => {
    setCurrentImage(newImage);
    setVideoIsPlaying(false);
  };

  const findFirstElement = (type: "video" | "image") => {
    const firstElement = headerGallery.find(item => item.type === type);
    firstElement && setCurrentImage(firstElement.id);
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
  const handleClick = (newSlide: number) => {
    setCurrentImage(newSlide);
    setLightBoxOpen(!lightBoxOpen);
  };
  React.useEffect(() => {
    currentImage >= headerGallery.length && onButtonClick(0);
    currentImage < 0 && onButtonClick(headerGallery.length - 1);
    setVideoIsPlaying(false);
    setDots(getDots());
  }, [currentImage]);

  return (
    <div className={styles["header-gallery"]}>
      <div className="uk-container">
        <Breadcrumb breadcrumbs={BreadcrumbsData} />
        <div className={styles["header-gallery__container"]}>
          <div className={`${styles["header-gallery__col"]} ${styles["large"]}`}>
            <div className={styles["header-gallery__slider_images"]}>
              <AliceCarousel
                onSlideChanged={e => onButtonClick(e.slide)}
                dotsDisabled
                startIndex={!lightBoxOpen ? currentImage : 0}
                responsive={responsive}
                infinite={true}
                buttonsDisabled
                items={headerGallery.map((item: IHeaderGallery, key: number) => (
                  <div
                    role="button"
                    key={key}
                    className={styles["gallery-images-item"]}
                    onClick={() => {
                      windowSize < mobileSize && handleClick(item.id);
                    }}
                  >
                    {item.type === "image" ? (
                      <ImageComponent src={item.url} />
                    ) : (
                      <ReactPlayer
                        url={item.url}
                        width={"100%"}
                        height={windowSize < mobileSize ? " 236px" : "496px"}
                        controls
                        onPlay={onVideoClick}
                        playing={currentImage === item.id && videoIsPlaying ? true : false}
                        style={{ pointerEvents: windowSize < mobileSize && "none" }}
                      />
                    )}
                  </div>
                ))}
              />
              <div className={styles["header-gallery__dots"]}>{dots}</div>

              <div className={` ${styles["header-gallery__slider_arrows"]} uk-visible@s`}>
                <div
                  className={styles["header-gallery__slider_arrows_prev"]}
                  onClick={() => onButtonClick(currentImage - 1)}
                  role="button"
                >
                  <IconComponent icon={getArrow(true)} size={"8px"} fillColor={"white"} />
                </div>
                <div
                  className={styles["header-gallery__slider_arrows_next"]}
                  onClick={() => onButtonClick(currentImage + 1)}
                  role="button"
                >
                  <IconComponent icon={getArrow(false)} size={"8px"} fillColor={"white"} />
                </div>
              </div>
            </div>
            {!videoIsPlaying && (
              <div className={`${styles["header-gallery__info"]} uk-visible@s`}>
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
                    Foto’s ({currentImage + 1}/{headerGallery.length})
                  </div>
                  <div
                    role="button"
                    style={{ cursor: "pointer", color: buttonActive === "video" ? "#34aadf" : "black" }}
                    onClick={() => findFirstElement("video")}
                    className={"uk-visible@s"}
                  >
                    <IconComponent
                      icon={IconPlay}
                      size={"12px"}
                      fillColor={buttonActive === "video" ? "#34aadf" : "black"}
                    />
                    Video
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={` ${styles["header-gallery__col"]} ${styles["small"]} ${"uk-visible@l"} `}>
            <div className={` uk-grid ${styles["uk-grid-small"]} data-uk-margin `}>
              {
                <>
                  <div
                    role="button"
                    className={` ${styles["header-gallery__col-card"]} uk-width-1-1`}
                    style={{ cursor: "pointer" }}
                    onClick={() => onButtonClick(1)}
                  >
                    {headerGallery[1].type === "image" ? (
                      <ImageComponent src={headerGallery[1].url} />
                    ) : (
                      <ReactPlayer
                        url={headerGallery[1].url}
                        width={"100%"}
                        height={"248px"}
                        controls
                        light
                        style={{ pointerEvents: "none" }}
                      />
                    )}
                  </div>
                  {headerGallery
                    .slice(smallImagesStart, headerGallery.length)
                    .map((value: IHeaderGallery, key: number) => (
                      <div
                        className={` ${styles["header-gallery__col-cards"]} uk-width-1-2@s`}
                        key={key}
                        style={{ cursor: "pointer" }}
                        onClick={() => onButtonClick(key + smallImagesStart)}
                        role="button"
                      >
                        {value.type === "image" ? (
                          <ImageComponent src={value.url} />
                        ) : (
                          value.type === "video" && (
                            <ReactPlayer
                              url={value.url}
                              width={"100%"}
                              height={"116px"}
                              controls
                              light
                              playing={currentImage === value.id && videoIsPlaying ? true : false}
                              style={{ pointerEvents: "none" }}
                            />
                          )
                        )}
                      </div>
                    ))}
                </>
              }
              {lightBoxOpen && currentImage !== undefined && (
                <LightBoxComponent
                  heightLightBoxContent={contentHeight}
                  isLightBoxOpen={lightBoxOpen}
                  setLightBoxOpen={() => setLightBoxOpen(!lightBoxOpen)}
                >
                  <div className={styles["header-gallery__lightbox"]}>
                    <div className={styles["header-gallery__lightbox-item"]}>
                      {findSlide(currentImage).type === "image" ? (
                        <ImageComponent src={findSlide(currentImage).url} />
                      ) : (
                        findSlide(currentImage).type === "video" && (
                          <div className={styles["header-gallery__lightbox-item-video"]}>
                            <ReactPlayer url={findSlide(currentImage).url} width={"100%"} height={"100%"} controls />
                          </div>
                        )
                      )}
                    </div>

                    <div className={styles["header-gallery__lightbox-arrows"]}>
                      <div
                        className={styles["header-gallery__lightbox-arrows-prev"]}
                        onClick={() => setCurrentImage(currentImage - 1)}
                        role="button"
                      >
                        <IconComponent icon={getArrow(true)} size={"8px"} fillColor={"white"} />
                      </div>

                      <div
                        className={styles["header-gallery__lightbox-arrows-next"]}
                        onClick={() => setCurrentImage(currentImage + 1)}
                        role="button"
                      >
                        <IconComponent icon={getArrow(false)} size={"8px"} fillColor={"white"} />
                      </div>
                    </div>
                  </div>
                </LightBoxComponent>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderGalleryComponent };
