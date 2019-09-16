import * as React from "react";
import { Checkbox, CalendarComponent } from "@app/prep/modules-prep/core";
import InputRange from "react-input-range";
import { Link } from "react-router-dom";

export interface ISidebarFormComponentProps {
  checkboxCount?: number;
  checkboxes?: { isChecked: boolean; label: string; name: string }[];
  checkboxesSpecial?: { isChecked: boolean; label: string; name: string }[];
  checkboxOnChange?: any;
  date?: any;
  dateOnchange?: any;
  radioButtons?: { label: string; name: string }[];
  range?: number;
  rangeMax?: number;
  rangeOnChange?: any;
  selectOptions?: any;
  sidebarList?: any;
  stateCheckboxes?: any;
}

const SidebarFormComponent = ({
  checkboxesSpecial,
  selectOptions,
  stateCheckboxes,
  radioButtons,
  checkboxCount,
  range,
  rangeMax,
  checkboxes,
  checkboxOnChange,
  dateOnchange,
  date,
  sidebarList,
  rangeOnChange
}: ISidebarFormComponentProps) => (
  <>
    {checkboxes ? (
      <div className="sidebar__item">
        <h5>Spel & Ontspanning</h5>
        {checkboxes.map((item, key) => (
          <Checkbox
            key={key}
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
    ) : null}
    {checkboxesSpecial ? (
      <div className="sidebar__item">
        <h5>Sportief & Actie(f)</h5>
        {checkboxesSpecial.map((item, key) => (
          <Checkbox
            key={key}
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
    ) : null}
    {checkboxesSpecial ? (
      <div className="sidebar__item">
        <h5>Creatieve Uitjes</h5>
        {checkboxesSpecial.map((item, key) => (
          <Checkbox
            key={key}
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
    ) : null}
    {checkboxesSpecial ? (
      <div className="sidebar__item">
        <h5>Eten, Drinken & Feesten</h5>
        {checkboxesSpecial.map((item, key) => (
          <Checkbox
            key={key}
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
    ) : null}
    {checkboxesSpecial ? (
      <div className="sidebar__item">
        <h5>Teambuilden</h5>
        {checkboxesSpecial.map((item, key) => (
          <Checkbox
            key={key}
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
    ) : null}
    {checkboxesSpecial ? (
      <div className="sidebar__item">
        <h5>Incentives</h5>
        {checkboxesSpecial.map((item, key) => (
          <Checkbox
            key={key}
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
    ) : null}
    {rangeMax ? (
      <div className="sidebar__item">
        <h5>Personen</h5>
        <div className="input-range__wrapper">
          <InputRange maxValue={rangeMax} minValue={0} value={range ? range : 0} onChange={rangeOnChange} />
          <div className="input-range__items">
            <span>{range}+</span>
            <span>{rangeMax}+</span>
          </div>
        </div>
      </div>
    ) : null}
    {date ? (
      <div className="sidebar__item">
        <CalendarComponent onChange={dateOnchange} date={date} />
      </div>
    ) : (
      ""
    )}
    {sidebarList ? (
      <div className="sidebar__item">
        <h5>{sidebarList.title}</h5>
        <ul className={"sidebar-list"}>
          {sidebarList.list
            ? sidebarList.list.map((item: string, index: number) => (
                <li key={index}>
                  <Link to={item}>{item}</Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    ) : null}
  </>
);

export { SidebarFormComponent };
