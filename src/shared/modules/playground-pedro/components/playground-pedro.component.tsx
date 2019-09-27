import React from "react";

import style from "./playground-pedro-component.module.scss";
import { HeroComponent } from "@app/modules/hero";
import { generateDummyHeroModule } from "@app/api/modules/hero/hero-module";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div>
    <div className={style["main"]}> Playground Pedro </div>
    <div> Hello World </div>
    <HeroComponent heroModule={generateDummyHeroModule()} />
  </div>
);

export { PlaygroundPedroComponent };
