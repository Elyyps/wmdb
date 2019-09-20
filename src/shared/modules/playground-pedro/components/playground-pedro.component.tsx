import React from "react";

import style from "./playground-pedro-component.module.scss";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div>
    <div className={style["main"]}> Playground Pedro </div>
    <div> Hello World </div>
  </div>
);

export { PlaygroundPedroComponent };
