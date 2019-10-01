/* tslint:disable */

import React from "react";

import style from "./playground-ahmed-component.module.scss";
import { ModuleSectionComponent } from "@app/modules/module-section";

export interface IPlaygroundAhmedComponentProps {}

const PlaygroundAhmedComponent = (props: IPlaygroundAhmedComponentProps) => (
  <div>
    <ModuleSectionComponent title={"new page builder"} paddingBottom={"40px"} paddingTop={"40px"}>
      <div>component here</div>
    </ModuleSectionComponent>
  </div>
);

export { PlaygroundAhmedComponent };
