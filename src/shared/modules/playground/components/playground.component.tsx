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

export interface IPlaygroundComponentProps {}
const imageList = [Oasis, Image, Oasis, Big, Grid, Rectangle];
const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div className={"uk-container"} />
);

export { PlaygroundComponent };
