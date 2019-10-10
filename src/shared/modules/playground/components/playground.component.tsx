/* tslint:disable */
import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";
import IconDefault from "@assets/icons/chevron-down.svg";
import style from "./playground-component.module.scss";
import { IconComponent } from "@app/core/icon";
import { ImageComponent } from "@app/core/image";
import { SliderImages } from "@app/prep/pages-prep/single-wmdb/dummy-data";
import Oasis from "@assets/oasis.jpg";
import Image from "@assets/img02.png";
import Rectangle from "@assets/rectangle.png";
import Big from "@assets/img-big.jpg";
import Grid from "@assets/img-grid.png";
import { CompanyOutingCardComponent } from "@app/core/company-outing-card";
import ETEN from "@assets/icons/eten.svg";
import SPEL from "@assets/icons/spel.svg";
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
const FeaturedPostsData = {
  icon: ETEN,
  title: "Blog titel",
  content:
    "Lorem ipsum dolor sit amet, consectetu dipiscing elit. Duis quis tortor lectus. Aliquam vel dignissim nunc…",
  image: Image,
  data: "18 sep. 2017",
  button: {
    title: "Lees meer",
    url: "#"
  }
};
const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div className={"uk-container"} style={{ width: "360px" }}>
    <CompanyOutingCardComponent {...FeaturedPostsData} />
  </div>
);

export { PlaygroundComponent };
