import * as React from "react";
import { CalendarComponent } from "@app/prep/modules-prep/core";
import InputRange from "react-input-range";
import { Link } from "react-router-dom";
import { Checkbox } from "../checkbox/checkbox.component";
import { ICheckbox, ICheckboxUnique } from "@app/api/core/checkbox";
import styles from "./overview-filter-component.module.scss";
import Search from "@assets/icons/search.svg";
import { Input } from "../input";
import { Button } from "../button";
import CROSS from "@assets/icons/cross.svg";
import { IconComponent } from "@app/core/icon";
import { IOverviewFilterCategoryItem, IOverviewFilterItem } from "@app/api/modules/overview";



export interface IOverviewFilterComponentProps {
  checkboxCount?: number;
  checkedItems?: any;
  clearFilter?: () => void;
  currentFilter?: IOverviewFilterItem;
  date?: any;
  dateOnchange?: any;
  filterItems?: IOverviewFilterCategoryItem[];
  filterText?: string;
  onFilterChange: (filterOptions: IOverviewFilterItem) => void;
  range?: number;
  rangeMax?: number;
  searchPlaceholder: string;
  sidebarList?: any;
}

const OverviewFilterComponent = (props: IOverviewFilterComponentProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const CheckboxObject: any = {};
  const [checkedItems, setCheckedItems] = React.useState(CheckboxObject);
  const [range, setRange] = React.useState<any>(null);
  const [filterText, setFilterText] = React.useState("");
  const MEDIUM_BREAKPOINT = 960;
  const {
    onFilterChange,
    searchPlaceholder,
    checkboxCount,
    rangeMax,
    filterItems,
    dateOnchange,
    date,
    sidebarList,
    currentFilter
  } = props;

  const clearFilter = () => {
    setCheckedItems([]);
    setFilterText("");
    setRange(0);
  };
  const initializeFilter = () => {
    if (currentFilter) {
      if (currentFilter.checkedItems) setCheckedItems(currentFilter.checkedItems);
      if (currentFilter.range) setRange(currentFilter.range);
      if (currentFilter.filterText) setFilterText(currentFilter.filterText);
    }
  };
  const handelClick = () => {
    setIsActive(!isActive);
    initializeFilter();
  };

  const sendFilterOptions = (filter: IOverviewFilterItem) => {
    if (onFilterChange) {
      if (window.outerWidth >= MEDIUM_BREAKPOINT) {
        onFilterChange(filter);
      }
    }
  };

  React.useEffect(() => {
    if (isActive) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflowY = "scroll";
      initializeFilter();
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      clearFilter();
    };
  }, [isActive]);

  React.useEffect(() => {
    initializeFilter();
  }, []);

  React.useEffect(() => {
    initializeFilter();
  }, [currentFilter, isActive]);



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
                clearFilter();
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
              onChange={value => {
                setFilterText(value);
                sendFilterOptions({ checkedItems, filterText: value, range });
              }}
              placeholder={searchPlaceholder}
              icon={Search}
              name={"search"}
            />
          </div>
        )}
        {isActive && (
          <Input
            onChange={value => {
              setFilterText(value);
              sendFilterOptions({ checkedItems, filterText: value, range });
            }}
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
              {filterItem.checkboxes.map((item: any, itemKey: any) => (
                <Checkbox
                  key={itemKey}
                  isChecked={checkedItems[item.id] ? checkedItems[item.id].isChecked : false}
                  id={key}
                  label={item.label}
                  name={item.id}
                  value={item.label}
                  count={checkboxCount}
                  onChange={(event: any) => {
                    const newCheckedItems = {
                      ...checkedItems,
                      [event.target.name]: {
                        isChecked: event.target.checked,
                        id: item.id,
                        label: event.target.value
                      }
                    };
                    setCheckedItems(newCheckedItems);
                    sendFilterOptions({ checkedItems: newCheckedItems, filterText, range });
                  }}
                />
              ))}
            </div>
          ))}
        {rangeMax && (
          <div className={styles["overview-filter__item"]}>
            <h5>Personen</h5>
            <div className="input-range__wrapper">
              <InputRange
                maxValue={rangeMax}
                minValue={0}
                value={range ? range : 0}
                onChange={event => {
                  setRange(event);
                }}
              />
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
          <Button
            onClick={() => {
              if (onFilterChange) {
                onFilterChange({ checkedItems, filterText, range });
              }
              setIsActive(false);
            }}
            fullWidth
            title={"Toon uitjes"}
            variant={"primary"}
          />
        </div>
      </div>
    </div>
  );
};

export { OverviewFilterComponent };
