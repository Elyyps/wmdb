/* tslint:disable */
import React from "react";
import style from "./playground-pedro-component.module.scss";

import { generateDummyHeroModule } from "@app/api/modules/hero/hero-module";
import { CategoryOverviewComponent } from "@app/modules/category-overview";
import { ArrowPanelListComponent } from "@app/core/arrow-panel-list";
import { generateDummyArrowPanelListData } from "../../../api/core/arrow-panel-list";
import { BodyTextComponent } from "@app/core/bodytext";
import { generateDummyBodyText } from "@app/api/core/bodytext";
import { Checkbox } from "@app/core/checkbox/checkbox.component";
import { Button } from "@app/core/button";
import { OverviewFilterComponent } from "@app/core/overview-filter";
import { dummyOverviewFilterData } from "@app/api/core/overview-filter";
import { OverviewComponent } from "@app/modules/overview";
import { IOverviewFilterItem, generateDummyOverviewModule } from "@app/api/modules/overview";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => {
  const CheckboxObject: IOverviewFilterItem = { checkedItems: [], keyword: "", filterText: "", range: 0 };
  const [checkedItems, setCheckedItems] = React.useState<any>(CheckboxObject);
  const [range, setRange] = React.useState(0);
  const [filterText, setFilterText] = React.useState("");
  const handleOnChangeRange = (value: any) => {
    setRange(value);
  };
  const handleChange = (event: any) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: {
        isChecked: event.target.checked,
        value: event.target.value
      }
    });
  };
  return (
    <div className={style["main"]}>
      <OverviewComponent overviewModule={generateDummyOverviewModule()} />
    </div>
  );
};

export { PlaygroundPedroComponent };
