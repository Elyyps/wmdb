/* tslint:disable */
import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";
import IconDefault from "@assets/icons/chevron-down.svg";
import style from "./playground-component.module.scss";
import { LinkComponent } from "@app/core/link";
import { IconComponent } from "@app/core/icon";
import { NavBarComponent } from "@app/modules/nav-bar";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";

export interface IPlaygroundComponentProps {}

const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div className={"uk-container"}>
    <NavBarComponent navbar={generateNavbarData()} />
  </div>
);

export { PlaygroundComponent };
