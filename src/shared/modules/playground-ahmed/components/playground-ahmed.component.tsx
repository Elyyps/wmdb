import React from "react";

import style from "./playground-ahmed-component.module.scss";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => (
  <div>
    <div className={style["main"]}> Playground Ahmed </div>
    <div> Hello World </div>
  </div>
);

export { PlaygroundAhmedComponent };
