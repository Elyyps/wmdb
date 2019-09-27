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
export interface IPlaygroundComponentProps {}
const imageList = [Oasis, Image, Oasis, Big, Grid, Rectangle];
const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div className={""}>
    <FooterComponent footer={generateFooterData()} />
  </div>
);

export { PlaygroundComponent };
