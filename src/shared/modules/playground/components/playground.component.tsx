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
    link: "#"
  }
};
const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div className={"uk-container"} style={{ width: "360px" }}>
    <CompanyOutingCardComponent {...FeaturedPostsData} />
  </div>
);

export { PlaygroundComponent };
