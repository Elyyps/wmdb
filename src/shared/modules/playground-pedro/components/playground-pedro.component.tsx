import React from "react";

import style from "./playground-pedro-component.module.scss";
import { ArrowPanel } from "@app/core/arrow-panel";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div>
    <div className={style["main"]}>
      <span>Playground Pedro </span>
      <div>
        <ArrowPanel title="title" link="./" />
        <ArrowPanel title="title" link="./" />
        <ArrowPanel title="title" link="./" />
        <ArrowPanel title="title" link="./" />
      </div>
    </div>
  </div>
);

export { PlaygroundPedroComponent };
