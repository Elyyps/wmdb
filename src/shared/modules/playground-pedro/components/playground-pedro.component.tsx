/* tslint:disable */
import React from "react";
import style from "./playground-pedro-component.module.scss";
import { CategoryOverviewComponent } from "@app/modules/category-overview";
import { CategoryOverviewDummyData } from "@app/api/modules/category-overview/dummy-data";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div>
    <div className={style["main"]}> Playground Pedro </div>
    <div> Hello World </div>
    <CategoryOverviewComponent categoryOverviewModule={CategoryOverviewDummyData} />
  </div>
);

export { PlaygroundPedroComponent };
