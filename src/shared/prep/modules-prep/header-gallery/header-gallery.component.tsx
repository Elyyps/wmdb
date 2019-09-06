import React, { useState } from "react";
import "./header-gallery-component.scss";
import IconImage from "@assets/icons/images.svg";
import IconPlay from "@assets/icons/play.svg";
import { IconComponent, ImageComponent } from "@app/prep/modules-prep/core";
import { GallerySliderComponent } from "./gallery-slider.component";
import { SliderImages } from "../../pages-prep/single-wmdk/dummy-data";

export interface IHeaderGalleryComponentProps {}

const HeaderGalleryComponent = (props: IHeaderGalleryComponentProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const handleChange = (val: number) => {
    setCurrentSlide(val + 1);
  };
  const sliceFullImagesFromm = 1;
  const sliceFullImagesTo = 2;
  const sliceFromImages = 2;
  const sliceToImages = 6;

  const getNthItems = (arr: any, numFrom: number, numTo: number) => arr.slice(numFrom, numTo);

  return (
    <div className="header-gallery">
      <div className="uk-container">
        <div className="header-gallery__container">
          <div className="header-gallery__col large">
            <GallerySliderComponent afterChange={handleChange} />
            <div className="header-gallery__info uk-visible@l">
              <div className="slider-info">
                <div className="photo">
                  <IconComponent icon={IconImage} size={"15px"} />
                  Foto’s ({currentSlide}/{SliderImages.length})
                </div>
                <div className="video">
                  <IconComponent icon={IconPlay} size={"12px"} />
                  Video
                </div>
              </div>
            </div>
          </div>
          <div className="header-gallery__col small uk-visible@l">
            <div className="uk-grid uk-grid-small" data-uk-margin>
              {SliderImages ? (
                <>
                  <div className="uk-width-1-1">
                    <ImageComponent src={getNthItems(SliderImages, sliceFullImagesFromm, sliceFullImagesTo)[0]} />
                  </div>
                  {getNthItems(SliderImages, sliceFromImages, sliceToImages).map((value: string, key: number) => (
                    <div className="uk-width-1-2@s" key={key}>
                      <ImageComponent src={value} />
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderGalleryComponent };
