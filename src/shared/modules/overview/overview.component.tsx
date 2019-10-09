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
const AD_POSITION = 6;

const OverviewComponent = () => {
  const rangeMax = 200;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [cards, setCards] = React.useState<IOutingCard[]>([]);
  const [currentFilter, setCurrentFilter] = React.useState<IOverviewFilterItem>({
    keyword: "",
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

  const handleClose = (item: any) => {
    const newCheckedItems = [...currentFilter.checkedItems];
    newCheckedItems.splice(item, 1);
    setCurrentFilter({ ...currentFilter, checkedItems: newCheckedItems });
  };
  const handleCloseTextFilter = () => {
    const newCheckedItems = { ...currentFilter };
    setCurrentFilter({ ...newCheckedItems, filterText: "" });
  };
  const handleCloseKeyword = () => {
    const newCheckedItems = { ...currentFilter };
    setCurrentFilter({ ...newCheckedItems, keyword: "" });
  };
  const handleCloseRange = () => {
    const newCheckedItems = { ...currentFilter };
    setCurrentFilter({ ...newCheckedItems, range: 0 });
  };

  React.useEffect(() => {
    const cardsFiltered = getCardsPaginated(0, TAKE, {
      keyword: "",
      filterText: "",
      checkedItems: [],
      range: rangeMax
    });
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
              sidebarList={{ title: "Handige links", list: ["Link 1", "Link 2"] }}
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
              {currentFilter.checkedItems.length > 0 && (
                <div className="overview-head__subtitle">
                  {`${currentFilter.checkedItems.length +
                    (currentFilter.filterText ? 1 : 0) +
                    (currentFilter.range ? 1 : 0)}  uitjes gevonden gebaseerd op de volgende filters:`}
                </div>
              )}

              <ul className="overview-head__list" data-uk-margin>
                {currentFilter.filterText && (
                  <li>
                    <LabelComponent
                      onClick={handleCloseTextFilter}
                      label={`Plaats, regio of provincie: ${currentFilter.filterText}`}
                    />
                  </li>
                )}
                {currentFilter.keyword && (
                  <li>
                    <LabelComponent onClick={handleCloseKeyword} label={`Keyword: ${currentFilter.keyword}`} />
                  </li>
                )}
                {currentFilter.range > 0 && (
                  <li>
                    <LabelComponent onClick={handleCloseRange} label={`${currentFilter.range} personen`} />
                  </li>
                )}
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
                <CardContainer Cards={cards.slice(0, AD_POSITION)} />
                {cards.length >= AD_POSITION && (
                  <>
                    <ListCheckComponent
                      labels={["Kwalitatief aanbod van uitjes", "Direct contact", "Unieke content van uitjes"]}
                    />
                    <CardContainer Cards={cards.slice(AD_POSITION, cards.length)} />
                  </>
                )}
                {totalPages > 1 && (
                  <PaginationComponent
                    changePage={setCurrentPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                  />
                )}
              </div>
            ) : (
              "Nothing to show"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export { OverviewComponent };
