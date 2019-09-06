import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";

import style from "./playground-component.module.scss";

export interface IPlaygroundComponentProps {}

const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div>
    <div className={style["main"]}> Playground!! </div>
    <div> Test Items:1111 </div>
  </div>
);

export { PlaygroundComponent };
