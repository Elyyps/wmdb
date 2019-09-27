/* tslint:disable */
import React from "react";
import style from "./playground-pedro-component.module.scss";
import { HeroComponent } from "@app/modules/hero";
import { generateDummyHeroModule } from "@app/api/modules/hero/hero-module";
import { CategoryOverviewComponent } from "@app/modules/category-overview";
import { CategoryOverviewDummyData } from "@app/api/modules/category-overview/dummy-data";
import { ArrowPanelListComponent } from "@app/core/arrow-panel-list";
import { GenerateDummyArrowPanelListData } from "../../../api/core/arrow-panel-list";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div className={style["main"]}>
    <HeroComponent heroModule={generateDummyHeroModule()} />
    <CategoryOverviewComponent categoryOverviewModule={CategoryOverviewDummyData} />
    <div style={{maxWidth: '500px'}} className="uk-container">
      <ArrowPanelListComponent {...GenerateDummyArrowPanelListData()} />
    </div>
  </div>
);

export { PlaygroundPedroComponent };
