import React from "react";

import style from "./playground-pedro-component.module.scss";
import { HeroComponent } from "@app/modules/hero";
import Placeholder from "@assets/img01.png";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div>
    <div className={style["main"]}> Playground Pedro </div>
    <div> Hello World </div>
    <HeroComponent
      title={"Wat gaan we dít jaar doen?! Vergelijk online gemakkelijk álle bedrijfsuitjes van Nederland"}
      image={Placeholder}
    />
  </div>
);

export { PlaygroundPedroComponent };
