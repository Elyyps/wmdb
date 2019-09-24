/* tslint:disable */
import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";
import IconDefault from "@assets/icons/chevron-down.svg";
import style from "./playground-component.module.scss";
import { IconComponent } from "@app/core/icon";
import { AdBannerComponent } from "@app/core/ad-banner";
import RECTANGLE from "@assets/rectangle.png";

export interface IPlaygroundComponentProps {}

const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div className={"uk-container"} style={{ width: "472px", height: "247" }}>
    <AdBannerComponent
      content={"Surfen? Dat doe je in Zeeland."}
      backgroundImage={RECTANGLE}
      button={{ title: "Meer info", url: "/" }}
      advertisement={"Advertentie"}
    />
  </div>
);

export { PlaygroundComponent };
