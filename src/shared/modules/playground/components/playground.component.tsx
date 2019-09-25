/* tslint:disable */
import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";
import IconDefault from "@assets/icons/chevron-down.svg";
import style from "./playground-component.module.scss";
import { IconComponent } from "@app/core/icon";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";
import { FooterComponent } from "@app/modules/footer";
import { generateFooterData } from "@app/api/modules/footer/end-point";
import { OutingCardComponent } from "@app/core/outing-card";
import PlaceholderImage from "@assets/img-big.jpg";
import PlaceholderImage1 from "@assets/img-center.jpg";

import SPEL from "@assets/icons/spel.svg";
import ETEN from "@assets/icons/eten.svg";
import ROOMS from "@assets/icons/rooms.svg";
import { CardPost } from "@app/prep/modules-prep/core";
export interface IPlaygroundComponentProps {}
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
const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div className={"uk-container"}>
    <OutingCardComponent {...card} />
    <CardPost {...card} />
  </div>
);

export { PlaygroundComponent };
