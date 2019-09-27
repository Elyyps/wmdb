/* tslint:disable */
import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";
import IconDefault from "@assets/icons/chevron-down.svg";
import style from "./playground-component.module.scss";
import { IconComponent } from "@app/core/icon";
import { ImageComponent } from "@app/core/image";
import { HeaderGalleryComponent } from "@app/modules/header-gallery";
import { SliderImages } from "@app/prep/pages-prep/single-wmdb/dummy-data";
import Oasis from "@assets/oasis.jpg";
import Image from "@assets/img02.png";
import Rectangle from "@assets/rectangle.png";
import Big from "@assets/img-big.jpg";
import Grid from "@assets/img-grid.png";

import SPEL from "@assets/icons/spel.svg";
import ETEN from "@assets/icons/eten.svg";
import ROOMS from "@assets/icons/rooms.svg";
import { CardPost } from "@app/prep/modules-prep/core";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { OutingCardComponent } from "@app/core/outing-card";
import PlaceholderImage from "@assets/img-big.jpg";
import PlaceholderImage1 from "@assets/img-center.jpg";
export interface IPlaygroundComponentProps {}
const imageList = [Oasis, Image, Oasis, Big, Grid, Rectangle];
const card = {
  title: "Escape City - Het ontsnappingsspel van Mokum",
  subtitle: "Citygames in Amsterdam",
  image: [PlaceholderImage, PlaceholderImage1, PlaceholderImage, PlaceholderImage1],
  button: {
    title: "Lees meer",
    href: "#"
  },
  data: {
    icon: ROOMS,
    label: "10 - 1000 personen"
  },
  content:
    "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
};
const navbarData = generateNavbarData();
const footerData = generateFooterData();
const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <React.Fragment>
    {/* <div className={""}>
      <NavBarComponent navbar={navbarData} />
    </div> */}
    <div className={""}>
      <FooterComponent footer={footerData} />
    </div>
    {/* <div className={"uk-container"}>
      <OutingCardComponent {...card} />
    </div> */}
    {/* <div className={"uk-container"}>
      <HeaderGalleryComponent images={imageList} />
    </div> */}
  </React.Fragment>
);

export { PlaygroundComponent };
