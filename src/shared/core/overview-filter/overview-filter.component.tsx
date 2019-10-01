import * as React from "react";
import { CalendarComponent } from "@app/prep/modules-prep/core";
import InputRange from "react-input-range";
import { Link } from "react-router-dom";
import { Checkbox } from "../checkbox/checkbox.component";
import { ICheckbox } from "@app/api/core/checkbox";
import styles from "./overview-filter-component.module.scss";
import Search from "@assets/icons/search.svg";
import { Input } from "../input";
import { Button } from "../button";

export interface IOverviewFilterCategoryItem {
  checkboxes: ICheckbox[];
  title: string;
}

export interface IOverviewFilterComponentProps {
  checkboxCount?: number;
  checkboxOnChange?: any;
  date?: any;
  dateOnchange?: any;
  filterItems?: IOverviewFilterCategoryItem[];
  onFilterChange?: (event: React.ChangeEvent) => void;
  range?: number;
  rangeMax?: number;
  rangeOnChange: (event: any) => void;
  searchPlaceholder: string;
  selectOptions?: any;
  sidebarList?: any;
  stateCheckboxes?: any;
}

const OverviewFilterComponent = (props: IOverviewFilterComponentProps) => {
  const {
    searchPlaceholder,
    stateCheckboxes,
    checkboxCount,
    range,
    rangeMax,
    filterItems,
    checkboxOnChange,
    dateOnchange,
    date,
    sidebarList,
    rangeOnChange
  } = props;

  return (
    <>
      <div className={styles["overview-filter__header"]}>
        <h2>Filters</h2>
        <Input placeholder={searchPlaceholder} icon={Search} name={"search"} />
      </div>
      {filterItems &&
        filterItems.map((filterItem, key) => (
          <div key={key} className={styles["overview-filter__item"]}>
            <h5>{filterItem.title}</h5>
            {filterItem.checkboxes.map((item, itemKey) => (
              <Checkbox
                key={itemKey}
                isChecked={stateCheckboxes[item.name] ? stateCheckboxes[item.name].isChecked : false}
                id={key}
                label={item.label}
                name={item.name}
                value={item.label}
                count={checkboxCount}
                onChange={checkboxOnChange}
              />
            ))}
          </div>
        ))}
      {rangeMax && (
        <div className={styles["overview-filter__item"]}>
          <h5>Personen</h5>
          <div className="input-range__wrapper">
            <InputRange maxValue={rangeMax} minValue={0} value={range ? range : 0} onChange={rangeOnChange} />
            <div className="input-range__items">
              <span>{range}+</span>
              <span>{rangeMax}+</span>
            </div>
          </div>
        </div>
      )}
      {date && (
        <div className={styles["overview-filter__item"]}>
          <CalendarComponent onChange={dateOnchange} date={date} />
        </div>
      )}
      {sidebarList && (
        <div className={styles["overview-filter__item"]}>
          <h5>{sidebarList.title}</h5>
          <ul className={"sidebar-list"}>
            {sidebarList.list &&
              sidebarList.list.map((item: string, index: number) => (
                <li key={index}>
                  <Link to={item}>{item}</Link>
                </li>
              ))}
          </ul>
        </div>
      )}
      <div className={`${styles["overview-filter__footer"]} uk-hidden@m`}>
        <Button fullWidth title={"Toon uitjes"} variant={"primary"} />
      </div>
    </>
  );
};

export { OverviewFilterComponent };
