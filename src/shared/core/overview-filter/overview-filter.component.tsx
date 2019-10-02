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
import CROSS from "@assets/icons/cross.svg";
import { IconComponent } from "@app/core/icon";

export interface IOverviewFilterCategoryItem {
  checkboxes: ICheckbox[];
  title: string;
}

export interface IOverviewFilterComponentProps {
  checkboxCount?: number;
  checkboxOnChange?: any;
  clearFilter?: () => void;
  date?: any;
  dateOnchange?: any;
  filterItems?: IOverviewFilterCategoryItem[];
  filterText?: string;
  filterTextOnChange?: (text: string) => void;
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
  const [isActive, setIsActive] = React.useState(false);
  const handelClick = () => {
    setIsActive(!isActive);
  };
  React.useEffect(() => {
    if (isActive) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isActive]);
  const {
    searchPlaceholder,
    stateCheckboxes,
    filterText,
    filterTextOnChange,
    checkboxCount,
    range,
    rangeMax,
    filterItems,
    checkboxOnChange,
    dateOnchange,
    date,
    sidebarList,
    rangeOnChange,
    clearFilter
  } = props;

  return (
    <div className={styles["overview-filter-wrapper"]}>
      <button className={`${styles["button-search"]} uk-hidden@m`} onClick={handelClick}>
        <IconComponent icon={Search} size={"15px"} />
        <span>{searchPlaceholder}</span>
      </button>

      <div className={`${styles["overview-filter"]} ${isActive && styles["isActive"]}`}>
        {isActive ? (
          <div className={styles["overview-filter__title"]}>
            <button role={"button"} onClick={handelClick} className="uk-hidden@m">
              <IconComponent icon={CROSS} size={"15px"} />
            </button>
            <h2>Filters</h2>
            <span
              onClick={() => {
                if (clearFilter) {
                  clearFilter();
                }
              }}
              role="button"
              className={"uk-hidden@m"}
            >
              Wissen
            </span>
          </div>
        ) : (
          <div className={styles["overview-filter__header"]}>
            <h2>Filters</h2>
            <Input
              value={filterText}
              onChange={filterTextOnChange}
              placeholder={searchPlaceholder}
              icon={Search}
              name={"search"}
            />
          </div>
        )}
        {isActive && (
          <Input
            onChange={filterTextOnChange}
            value={filterText}
            placeholder={searchPlaceholder}
            icon={Search}
            name={"search"}
          />
        )}
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
      </div>
    </div>
  );
};

export { OverviewFilterComponent };
