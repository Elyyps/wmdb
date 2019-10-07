import * as React from "react";
import styles from "./overview-component.module.scss";
import { OverviewFilterComponent, IOverviewFilterItem } from "@app/core/overview-filter";
import { dummyOverviewFilterData } from "@app/api/core/overview-filter";
import { LabelComponent } from "./label/label.component";

import PlaceholderImage from "@assets/img01.png";
import PlaceholderImage1 from "@assets/img02.png";
import ROOMS from "@assets/icons/rooms.svg";
import { ICheckbox, ICheckboxUnique } from "@app/api/core/checkbox";
import { CardContainer } from "@app/core/card-post";
import { PaginationComponent } from "@app/core/pagination";
import { ListCheckComponent } from "@app/core/list-check";

const CARDS = [
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [PlaceholderImage, PlaceholderImage1, PlaceholderImage, PlaceholderImage1],
    button: {
      title: "Lees meer",
      href: "#"
    },
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "The Hangover",
    subtitle: "Citygames in Amsterdam",
    image: [PlaceholderImage, PlaceholderImage1, PlaceholderImage, PlaceholderImage1],
    button: {
      title: "Lees meer",
      href: "#"
    },
    data: {
      icon: ROOMS,
      label: "10 - 200 personen"
    },
    content:
      "TB Events: Met een flinke kater: verloren spullen, lippenstift op vreemde plaatsen, blauwe plekken... Net als de vier hoofdrol-spelers in de briljante speelfilm ‘The Hangover’. TB Events biedt je de mogelijkheid om The Hangover nu zelf real time..."
  }
];

export interface IOverviewComponentProps {}

const OverviewComponent = (props: IOverviewComponentProps) => {
  const testCount = 30;
  const CheckboxObject: any = {};
  const [range, setRange] = React.useState(0);
  const [checkboxCount] = React.useState(testCount);
  const rangeMax = 200;
  const [totalSelected, setTotalSelected] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(7);
  const [checkedItems, setCheckedItems] = React.useState(CheckboxObject);

  const [currentFilter, setCurrentFilter] = React.useState<IOverviewFilterItem>({
    checkedItems: [],
    filterText: "",
    range: 0
  });

  const [date, setDate] = React.useState(new Date());

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
    const newObjState = { ...currentFilter };
    console.log(item);
    newObjState.checkedItems[item].isChecked = false;
    setCurrentFilter({ ...newObjState });
  };

  const total = false;
  const handleChange = (event: any) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: {
        isChecked: event.target.checked,
        value: event.target.value
      }
    });
  };
  React.useEffect(() => {
    getSelectedItems(checkedItems);
  });

  return (
    <div className="overview">
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-4@m">
            <OverviewFilterComponent
              searchPlaceholder="Plaats, regio of provincie"
              range={0}
              currentFilter={currentFilter}
              onFilterChange={changed => {
                setCurrentFilter(changed);
              }}
              {...dummyOverviewFilterData}
            />
          </div>
          <div className="uk-width-3-4@m">
            <div className="overview-head uk-visible@m">
              {total && (
                <div className="overview-head__subtitle">
                  {totalSelected} uitjes gevonden gebaseerd op de volgende filters:
                </div>
              )}
              <ul className="overview-head__list" data-uk-margin>
                {currentFilter.checkedItems &&
                  Object.keys(currentFilter.checkedItems).map(
                    (item: any, key: number) =>
                      currentFilter.checkedItems &&
                      currentFilter.checkedItems[item].isChecked && (
                        <li key={key}>
                          <LabelComponent
                            onClick={() => handleClose(item)}
                            label={currentFilter.checkedItems[item].value}
                          />
                        </li>
                      )
                  )}
              </ul>
            </div>
            <div className="overview-body">
              <ListCheckComponent
                labels={["Kwalitatief aanbod van uitjes", "Direct contact", "Unieke content van uitjes"]}
              />
              <CardContainer Cards={CARDS} />
              <ListCheckComponent
                labels={["Kwalitatief aanbod van uitjes", "Direct contact", "Unieke content van uitjes"]}
              />
              <CardContainer Cards={[]} />
            </div>
            <PaginationComponent
              changePage={setCurrentPage}
              previousPage={previousPage}
              nextPage={nextPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export { OverviewComponent };
