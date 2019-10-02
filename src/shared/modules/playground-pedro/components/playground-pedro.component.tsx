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
import { OverviewFilterComponent } from "@app/core/overview-filter";
import { dummyOverviewFilterData } from "@app/api/core/overview-filter";

export interface IPlaygroundPedroComponentProps {}

const PlaygroundPedroComponent = (props: IPlaygroundPedroComponentProps) => {
  const CheckboxObject: any = {};
  const [checkedItems, setCheckedItems] = React.useState(CheckboxObject);
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
      <div className="uk-grid">
        <div style={{ background: "white", padding: 24 }} className="uk-width-1-4@m">
          <OverviewFilterComponent
            searchPlaceholder="Plaats, regio of provincie"
            rangeOnChange={handleOnChangeRange}
            range={range}
            filterText={filterText}
            filterTextOnChange={setFilterText}
            checkboxOnChange={handleChange}
            stateCheckboxes={checkedItems}
            clearFilter={() => {
              setFilterText('');
              setCheckedItems([]);
              setRange(100);
            }}
            {...dummyOverviewFilterData}
          />
        </div>
      </div>
    </div>
  );
};

export { PlaygroundPedroComponent };
