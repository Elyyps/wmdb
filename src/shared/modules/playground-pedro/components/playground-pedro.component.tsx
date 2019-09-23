import React from "react";

import style from "./playground-pedro-component.module.scss";
import { Dropdown } from "@app/core/dropdown";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div>
    <div className={style["main"]}> Playground Pedro </div>
    <div> Hello World </div>
    <Dropdown options={[{ label: "label1", value: "value" }]} placeholder="placeholder" />
  </div>
);

export { PlaygroundPedroComponent };
