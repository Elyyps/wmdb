import React, { useState, useEffect } from "react";
import "./overview-component.scss";
import { Sidebar, CardContainer, ListCheckComponent } from "@app/prep/modules-prep/core";
import { LabelComponent } from "./label/label.component";
import { CheckBoxes, CheckBoxesSpecial, SidebarList } from "./dummy-overview";
import { SidebarFormComponent } from "./sidebarform/sidebar-form.component";

export interface IOverviewComponentProps {
  Cards?: any;
  CardsSecondary?: any;
  sidebar: {
    calendar?: boolean;
    placeholder: string;
    title: string;
  };
  total?: boolean;
}

const OverviewComponent = ({ total, Cards, CardsSecondary, sidebar }: IOverviewComponentProps) => {
  const testCount = 30;
  const CheckboxObject: any = {};
  const [range, setRange] = useState(0);
  const [checkboxCount] = useState(testCount);
  const rangeMax = 200;
  const [totalSelected, setTotalSelected] = useState(0);
  const [checkedItems, setCheckedItems] = useState(CheckboxObject);
  const [date, setDate] = useState(new Date());
  const handleChange = (event: any) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: {
        isChecked: event.target.checked,
        value: event.target.value
      }
    });
  };
  useEffect(() => {
    getSelectedItems(checkedItems);
  });

  const getSelectedItems = (state: any) => {
    let count = 0;
    Object.keys(state).map((item, index) => {
      if (checkedItems[item].isChecked) {
        count += 1;
      }
    });
    setTotalSelected(count);
  };
  const handleOnChangeRange = (value: any) => {
    setRange(value);
  };
  const handelChangeDate = (dateObj: any) => {
    setDate(dateObj);
  };
  const handleClose = (item: any) => {
    const newObjState = { ...checkedItems };
    newObjState[item].isChecked = false;
    setCheckedItems({ ...newObjState });
  };

  return (
    <div className="overview">
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-4@m">
            <Sidebar title={sidebar.title} searchPlaceholder={sidebar.placeholder}>
              {sidebar.calendar ? (
                <SidebarFormComponent date={date} dateOnchange={handelChangeDate} />
              ) : (
                <SidebarFormComponent
                  stateCheckboxes={checkedItems}
                  checkboxOnChange={handleChange}
                  checkboxes={CheckBoxes}
                  checkboxesSpecial={CheckBoxesSpecial}
                  rangeOnChange={handleOnChangeRange}
                  rangeMax={rangeMax}
                  range={range}
                  checkboxCount={checkboxCount}
                  sidebarList={SidebarList}
                />
              )}
            </Sidebar>
          </div>
          <div className="uk-width-3-4@m">
            <div className="overview-head uk-visible@m">
              {total ? (
                <div className="overview-head__subtitle">
                  {totalSelected} uitjes gevonden gebaseerd op de volgende filters:
                </div>
              ) : null}
              <ul className="overview-head__list" data-uk-margin>
                {checkedItems
                  ? Object.keys(checkedItems).map(
                      (item: any, key: number) =>
                        checkedItems &&
                        checkedItems[item].isChecked && (
                          <li key={key}>
                            <LabelComponent onClick={() => handleClose(item)} label={checkedItems[item].value} />
                          </li>
                        )
                    )
                  : ""}
              </ul>
            </div>
            <div className="overview-body">
              <ListCheckComponent
                labels={["Kwalitatief aanbod van uitjes", "Direct contact", "Unieke content van uitjes"]}
              />
              <CardContainer Cards={Cards} />
              <ListCheckComponent
                labels={["Kwalitatief aanbod van uitjes", "Direct contact", "Unieke content van uitjes"]}
              />
              <CardContainer Cards={CardsSecondary} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OverviewComponent };
