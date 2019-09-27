/* tslint:disable */
import React from "react";
import style from "./playground-pedro-component.module.scss";
import { HeroComponent } from "@app/modules/hero";
import { generateDummyHeroModule } from "@app/api/modules/hero/hero-module";
import { CategoryOverviewComponent } from "@app/modules/category-overview";
import { CategoryOverviewDummyData } from "@app/api/modules/category-overview/dummy-data";
import { ArrowPanelListComponent } from "@app/core/arrow-panel-list";
import { generateDummyArrowPanelListData } from "../../../api/core/arrow-panel-list";
import { BodyTextComponent } from "@app/core/bodytext";
import { generateDummyBodyText } from "@app/api/core/bodytext";
import { Checkbox } from "@app/core/checkbox/checkbox.component";
import { Button } from "@app/core/button";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => (
  <div className={style["main"]}>
    <HeroComponent
      onSubmit={obj => {
        console.log(obj);
      }}
      heroModule={generateDummyHeroModule()}
    />
    <CategoryOverviewComponent categoryOverviewModule={CategoryOverviewDummyData} />
    <div style={{ maxWidth: "500px" }} className="uk-container">
      <ArrowPanelListComponent {...generateDummyArrowPanelListData()} />
      <BodyTextComponent html={generateDummyBodyText()} />
      <Checkbox label="Checkbox Label" />
      <Checkbox onChange={()=>{
        console.log("checkbox changed")
      }} isChecked label="Checkbox checked" />
      <div className={style["components"]} style={{ display: "flex", flexDirection: "column" }}>
        <Button variant="primary" title="Button primary" />
        <Button variant="secondary" title="Button secondary" />
      </div>
    </div>
  </div>
);

export { PlaygroundPedroComponent };
