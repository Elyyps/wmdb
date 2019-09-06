import * as React from "react";
import { Checkbox, RadioButton, Select, CalendarComponent } from "@app/prep/modules-prep/core";
import InputRange from "react-input-range";

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
  rangeOnChange
}: ISidebarFormComponentProps) => (
  <>
    {checkboxes ? (
      <div className="sidebar__item">
        <h5>Activiteiten</h5>
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
    {selectOptions ? (
      <div className="sidebar__item">
        <h5>Leeftijd</h5>
        <Select {...selectOptions} />
      </div>
    ) : null}
    {radioButtons ? (
      <div className="sidebar__item">
        <h5>Type activiteit</h5>
        {radioButtons.map((item, key: any) => (
          <RadioButton
            isChecked={stateCheckboxes[item.name] ? stateCheckboxes[item.name].isChecked : false}
            key={key}
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
        <h5>Speciale wensen</h5>
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
    {rangeMax && range ? (
      <div className="sidebar__item">
        <h5>Personen</h5>
        <div className="input-range__wrapper">
          <InputRange maxValue={rangeMax} minValue={0} value={range} onChange={rangeOnChange} />
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
  </>
);

export { SidebarFormComponent };
