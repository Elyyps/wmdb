import * as React from "react";
import { OverviewFilterComponent } from "@app/core/overview-filter";
import { LabelComponent } from "./label/label.component";

import { CardContainer } from "@app/core/card-post";
import { PaginationComponent } from "@app/core/pagination";
import { ListCheckComponent } from "@app/core/list-check";
import { IOverviewFilterItem, IOutingCard, getCardsPaginated } from "@app/api/modules/overview";
import { GenerateDummyFilterOverview } from "../../api/modules/overview/dummy-data";

export interface IOverviewComponentProps {}

const TAKE = 8;

const OverviewComponent = () => {
  const CheckboxObject: any = {};
  const rangeMax = 200;
  const [totalSelected, setTotalSelected] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(7);
  const [checkedItems] = React.useState(CheckboxObject);
  const [cards, setCards] = React.useState<IOutingCard[]>([]);
  const [currentFilter, setCurrentFilter] = React.useState<IOverviewFilterItem>({
    checkedItems: [],
    filterText: "",
    range: 0
  });

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getSelectedItems = (state: any) => {
    let count = 0;
    Object.keys(state).map(item => {
      if (checkedItems[item].isChecked) {
        count += 1;
      }
    });
    setTotalSelected(count);
  };

  const handleClose = (item: any) => {
    const newCheckedItems = [...currentFilter.checkedItems];
    newCheckedItems.splice(item, 1);
    setCurrentFilter({ ...currentFilter, checkedItems: newCheckedItems });
  };

  const total = false;

  React.useEffect(() => {
    getSelectedItems(checkedItems);
  });

  React.useEffect(() => {
    const cardsFiltered = getCardsPaginated(0, TAKE, { filterText: "", checkedItems: [], range: rangeMax });
    setTotalPages(cardsFiltered.total);
    setCards(cardsFiltered.cards);
  }, []);
  React.useEffect(() => {
    const skip = (currentPage - 1) * TAKE;
    const cardsFiltered = getCardsPaginated(skip, TAKE, currentFilter);
    setTotalPages(cardsFiltered.total);
    setCards(cardsFiltered.cards);
  }, [currentPage]);

  React.useEffect(() => {
    const skip = (currentPage - 1) * TAKE;
    const cardsFiltered = getCardsPaginated(skip, TAKE, currentFilter);
    setTotalPages(cardsFiltered.total);
    setCards(cardsFiltered.cards);
  }, [currentFilter]);

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
              filterItems={GenerateDummyFilterOverview()}
              rangeMax={rangeMax}
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
                  Object.keys(currentFilter.checkedItems).map((item: any, key: number) => (
                    <li key={key}>
                      <LabelComponent
                        onClick={() => handleClose(item)}
                        label={currentFilter.checkedItems[item].label}
                      />
                    </li>
                  ))}
              </ul>
            </div>

            {totalPages ? (
              <div className="overview-body">
                <ListCheckComponent
                  labels={["Kwalitatief aanbod van uitjes", "Direct contact", "Unieke content van uitjes"]}
                />
                <CardContainer Cards={cards.slice(0, 6)} />
                {cards.length >= 6 && (
                  <>
                    <ListCheckComponent
                      labels={["Kwalitatief aanbod van uitjes", "Direct contact", "Unieke content van uitjes"]}
                    />
                    <CardContainer Cards={cards.slice(6, cards.length)} />
                  </>
                )}
                <PaginationComponent
                  changePage={setCurrentPage}
                  previousPage={previousPage}
                  nextPage={nextPage}
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              </div>
            ) : 
                  'Nothing to show'
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export { OverviewComponent };
