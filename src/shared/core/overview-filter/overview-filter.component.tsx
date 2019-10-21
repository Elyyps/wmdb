import * as React from "react";
import InputRange from "react-input-range";
import { Checkbox } from "../checkbox/checkbox.component";
import { ICheckboxUnique } from "@app/api/core/checkbox";
import styles from "./overview-filter-component.module.scss";
import Search from "@assets/icons/search.svg";
import { Input } from "../input";
import { Button } from "../button";
import CROSS from "@assets/icons/cross.svg";
import { IconComponent } from "@app/core/icon";
import { IOverviewFilterCategoryItem, IOverviewFilterItem } from "@app/api/modules/overview";
import { arrayRemoveElement } from "@app/util/array";
import { LinkComponent } from "../link";
import { CalendarComponent } from "../calendar";

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
  const [checkedItems, setCheckedItems] = React.useState<ICheckboxUnique[]>([]);
  const [range, setRange] = React.useState<any>(null);
  const [tempRange, setTempRange] = React.useState<any>(null);
  const [filterText, setFilterText] = React.useState("");
  const [keywordText, setKeywordText] = React.useState("");
  const MEDIUM_BREAKPOINT = 960;
  const {
    onFilterChange,
    searchPlaceholder,
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
    setKeywordText("");
    setRange(0);
  };
  const initializeFilter = () => {
    if (currentFilter) {
      setCheckedItems(currentFilter.checkedItems);
      setRange(currentFilter.range);
      setKeywordText(currentFilter.keyword);
      setFilterText(currentFilter.filterText);
    }
  };
  const handleClick = () => {
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

  const handleCheckboxChange = (item: ICheckboxUnique) => {
    let newCheckedItems = [...checkedItems];
    const currentItem = newCheckedItems.find(filter => filter.id === item.id);
    if (currentItem) {
      newCheckedItems = arrayRemoveElement(newCheckedItems, currentItem);
    } else {
      newCheckedItems.push({
        isChecked: true,
        id: item.id,
        label: item.label
      });
    }
    setCheckedItems(newCheckedItems);
    sendFilterOptions({ checkedItems: newCheckedItems, keyword: keywordText, filterText, range });
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
      <button className={`${styles["button-search"]} uk-hidden@m`} onClick={handleClick}>
        <IconComponent icon={Search} size={"15px"} />
        <span>{searchPlaceholder}</span>
      </button>

      <div className={`${styles["overview-filter"]} ${isActive && styles["isActive"]}`}>
        {isActive ? (
          <div className={styles["overview-filter__title"]}>
            <button role={"button"} onClick={handleClick} className="uk-hidden@m">
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
              onChange={(e: any) => {
                setFilterText(e.target.value);
                sendFilterOptions({ checkedItems, keyword: keywordText, filterText: e.target.value, range });
              }}
              placeholder={searchPlaceholder}
              icon={Search}
              name={"search"}
            />
          </div>
        )}
        {isActive && (
          <Input
            onChange={(e: any) => {
              setFilterText(e.target.value);
              sendFilterOptions({ checkedItems, keyword: keywordText, filterText: e.target.value, range });
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
              {filterItem.checkboxes.map((item: ICheckboxUnique, itemKey: any) => (
                <Checkbox
                  key={itemKey}
                  isChecked={checkedItems.find(filter => filter.id === item.id)}
                  id={key}
                  label={item.label}
                  name={item.id}
                  value={item.label}
                  count={item.count}
                  onChange={() => {
                    handleCheckboxChange(item);
                  }}
                />
              ))}
            </div>
          ))}

        <div className={styles["overview-filter__item"]}>
          <h5>Zoekwoord</h5>
          <Input
            value={keywordText}
            onChange={(e: any) => {
              setKeywordText(e.target.value);
              sendFilterOptions({ checkedItems, keyword: e.target.value, filterText, range });
            }}
            name="zoekwoord"
            placeholder="Zoekwoord"
          />
        </div>
        {rangeMax && (
          <div className={styles["overview-filter__item"]}>
            <h5>Personen</h5>
            <div className="input-range__wrapper">
              <InputRange
                maxValue={rangeMax}
                minValue={0}
                value={tempRange ? tempRange : 0}
                onChangeComplete={event => {
                  const numberRange = parseInt(event.toString(), 0);
                  setRange(numberRange);
                  sendFilterOptions({
                    checkedItems,
                    keyword: keywordText,
                    filterText,
                    range: numberRange
                  });
                }}
                onChange={event => {
                  setTempRange(event);
                }}
              />
              <div className="input-range__items">
                <span>{tempRange ? tempRange : 0}+</span>
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
          <div className={`${styles["overview-filter__item"]} ${styles["divider"]}`}>
            <h5>{sidebarList.title}</h5>
            <ul className={"sidebar-list"}>
              {sidebarList.list &&
                sidebarList.list.map((item: string, index: number) => (
                  <li key={index}>
                    <LinkComponent variant="secondary" to={item}>
                      {item}
                    </LinkComponent>
                  </li>
                ))}
            </ul>
          </div>
        )}
        <div className={`${styles["overview-filter__footer"]} uk-hidden@m`}>
          <Button
            onClick={() => {
              if (onFilterChange) {
                onFilterChange({ checkedItems, keyword: keywordText, filterText, range });
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
