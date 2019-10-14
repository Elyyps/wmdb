/* tslint:disable */
import React from "react";
import Image from "@assets/img02.png";
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
    url: "#"
  }
};
const PlaygroundComponent = () => (
  <div className={"uk-container"} style={{ width: "360px" }}>
    <CompanyOutingCardComponent {...FeaturedPostsData} />
  </div>
);

export { PlaygroundComponent };
