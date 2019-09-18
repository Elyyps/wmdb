import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";

import style from "./playground-component.module.scss";
import { ArrowPanel } from "@app/core/arrow-panel/arrow-panel.component";

export interface IPlaygroundComponentProps {}

const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div>
    <div style={{ backgroundColor: "#e8f2fc" }} className={style["main"]}>
      Playground!!
      <div >
        <ArrowPanel title="Title #1" link="/" />
        <ArrowPanel title="Title #2" link="/" />
      </div>
    </div>
  </div>
);

export { PlaygroundComponent };
