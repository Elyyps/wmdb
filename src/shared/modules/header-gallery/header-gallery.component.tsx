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

const HeaderGalleryComponent = ({ headerGallery }: IHeaderGalleryComponentProps) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [videoIsPlaying, setVideoIsPlaying] = React.useState(false);
  const [buttonActive, setbuttonActive] = React.useState<undefined|"image"|"video">(undefined);
  const smallImagesStart = 2;

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
    setbuttonActive(type);
  };

  React.useEffect(() => {
    currentImage >= headerGallery.length && onButtonClick(0);
    currentImage < 0 && onButtonClick(headerGallery.length - 1);
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
                startIndex={currentImage}
                responsive={responsive}
                infinite={true}
                buttonsDisabled
                items={headerGallery.map((item: IHeaderGallery, key: number) =>
                  item.type === "image" ? (
                    <ImageComponent src={item.url} key={key} />
                  ) : (
                    <ReactPlayer
                      url={item.url}
                      width={"100%"}
                      height={"496px"}
                      controls
                      onPlay={onVideoClick}
                      playing={currentImage === item.id && videoIsPlaying && true}
                    />
                    
                  )
                )}
              />
              <div className={styles["header-gallery__slider_arrows"]}>
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
              <div className={`${styles["header-gallery__info"]} ${"uk-visible@l"}`}>
                <div className={styles["slider-info"]}>
                  <div
                    role="button"
                    className={styles["photo"]}
                    style={{ cursor: "pointer",color:buttonActive==="image" ? "#34aadf" :"black"  }}
                    onClick={() => findFirstElement("image")}
                  >
                    <IconComponent icon={IconImage} size={"15px"} fillColor={buttonActive==="image" ? "#34aadf" :"black" }/>
                    Foto’s ({currentImage + 1}/{headerGallery.length})
                  </div>
                  <div role="button" style={{ cursor: "pointer",color:buttonActive==="video" ? "#34aadf" :"black"  }} onClick={() => findFirstElement("video")}>
                    <IconComponent icon={IconPlay} size={"12px"} fillColor={buttonActive==="video" ? "#34aadf" :"black" }/>
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
                              style={{ pointerEvents: "none" }}
                            />
                           
                          )
                        )}
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
