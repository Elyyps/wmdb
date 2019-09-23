import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";
import style from "./playground-component.module.scss";

export interface IPlaygroundComponentProps {}

const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div>
    <div style={{ backgroundColor: "#e8f2fc" }} className={style["main"]}>
      Playground!!
    </div>
  </div>
);

export { PlaygroundComponent };
