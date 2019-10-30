import * as React from "react";
import { OverviewFilterComponent } from "@app/core/overview-filter";
import { LabelComponent } from "./label/label.component";
import { CardContainer } from "@app/core/card-post";
import { PaginationComponent } from "@app/core/pagination";
import { ListCheckComponent } from "@app/core/list-check";
import { IOverviewFilterItem, IOutingCard, getCardsPaginated } from "@app/api/modules/overview";
import { IOverviewModule } from "../../api/modules/overview/overview";
import styles from "./overview-component.module.scss";
import { ICheckboxUnique } from "@app/api/core/checkbox";

import { Link } from "react-router-dom";
const queryString = require("query-string");

export interface IOverviewComponentProps {
  overviewModule: IOverviewModule;
}

const TAKE = 8;
const AD_POSITION = 6;

const OverviewComponent = (props: IOverviewComponentProps) => {
  const { overviewModule } = props;
  const rangeMax = 200;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [totalCards, setTotalCards] = React.useState(0);
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

  const insertUrlParam = (key: string, value: string) => {
    if (history.pushState) {
      const searchParams = new URLSearchParams(window.location.search);

      searchParams.set(key, value);
      const newurl = `?${searchParams.toString()}`;
      window.history.pushState({ path: newurl }, "", newurl);
    }
  };
  const deleteUrlParam = (key: string) => {
    if (history.pushState) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.delete(key);
      const newurl = `?${searchParams.toString()}`;
      window.history.pushState({ path: newurl }, "", newurl);
    }
  };
  React.useEffect(() => {
    /* tslint:disable:no-empty */
    try {
      const parsed: {
        categories?: string;
        keyword?: string;
        range?: number;
        region?: string;
      } = queryString.parse(location.search);
      const categoriesId: ICheckboxUnique[] = [];
      let keyword = "";
      let region = "";
      let range = 0;

      if (parsed.categories) {
        const categoriesIdJson: string[] = JSON.parse(`[${parsed.categories}]`);
        categoriesIdJson.forEach(item => {
          const foundSection = overviewModule.filter.find((filterSection: any) => {
            if (filterSection.checkboxes.find((filterItem: any) => filterItem.id === parseInt(item, 0))) {
              return filterSection;
            }
          });
          if (foundSection) {
            const foundItem = foundSection.checkboxes.find((filterItem: any) => filterItem.id === parseInt(item, 0));
            if (foundItem) categoriesId.push({ ...foundItem, isChecked: true });
          }
        });
      }
      if (parsed.keyword) keyword = parsed.keyword;
      if (parsed.region) region = parsed.region;
      if (parsed.region) region = parsed.region;
      if (parsed.range) range = parsed.range;

      setCurrentFilter({
        filterText: region,
        range,
        keyword,
        checkedItems: categoriesId
      });
    } catch (e) {}

    /* tslint:enable:no-empty */

    const cardsFiltered = getCardsPaginated(0, TAKE, currentFilter);
    const totalPagesCalculated = cardsFiltered.total / TAKE;
    setTotalCards(cardsFiltered.total);
    setTotalPages(totalPagesCalculated);
    setCards(cardsFiltered.cards);
  }, []);
  React.useEffect(() => {
    const skip = (currentPage - 1) * TAKE;
    const cardsFiltered = getCardsPaginated(skip, TAKE, currentFilter);
    setTotalCards(cardsFiltered.total);
    const totalPagesCalculated = cardsFiltered.total / TAKE;
    setTotalPages(totalPagesCalculated);
    setCards(cardsFiltered.cards);
  }, [currentPage]);

  React.useEffect(() => {
    const skip = (currentPage - 1) * TAKE;
    const cardsFiltered = getCardsPaginated(skip, TAKE, currentFilter);
    const totalPagesCalculated = cardsFiltered.total / TAKE;
    setTotalCards(cardsFiltered.total);
    setTotalPages(totalPagesCalculated);
    setCards(cardsFiltered.cards);

    if (currentFilter.keyword) insertUrlParam("keyword", currentFilter.keyword);
    else deleteUrlParam("keyword");

    if (currentFilter.filterText) insertUrlParam("region", currentFilter.filterText);
    else deleteUrlParam("region");
    if (currentFilter.range) {
      insertUrlParam("range", currentFilter.range.toString());
    } else deleteUrlParam("range");

    if (currentFilter.checkedItems.length > 0) {
      const checkedItemsMapped = currentFilter.checkedItems.map(item => item.id);
      insertUrlParam("categories", checkedItemsMapped.join(","));
    } else {
      deleteUrlParam("categories");
    }
  }, [currentFilter]);

  return (
    <div className={styles["overview"]}>
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-4@m">
            <OverviewFilterComponent
              searchPlaceholder="Plaats, regio of provincie"
              range={currentFilter.range}
              sidebarList={{ title: "Handige links", list: ["Link 1", "Link 2"] }}
              currentFilter={currentFilter}
              onFilterChange={changed => {
                setCurrentFilter(changed);
              }}
              filterItems={overviewModule.filter}
              rangeMax={rangeMax}
            />
          </div>
          <div className="uk-width-3-4@m">
            <div className={`${styles["overview-head"]} uk-visible@m`}>
              {currentFilter.checkedItems.length > 0 && (
                <div className={styles["overview-head__subtitle"]}>
                  <span> {`${totalCards}  uitjes gevonden gebaseerd op de volgende filters:`}</span>
                  <Link to="#" onClick={() => setCurrentFilter({ ...currentFilter, checkedItems: [] })}>
                    Alle filters wissen
                  </Link>
                </div>
              )}

              <ul className={styles["overview-head__list"]} data-uk-margin>
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
              <div className={styles["overview-body"]}>
                <ListCheckComponent
                  labels={["Kwalitatief aanbod van uitjes", "Direct contact", "Unieke content van uitjes"]}
                />
                <CardContainer Cards={cards.slice(0, AD_POSITION)} />
                {cards.length >= AD_POSITION && (
                  <>
                    <ListCheckComponent
                      hideTopBorder
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
              <span>
                Weg met de Baas heeft geen uitjes gevonden met de huidige gekozen zoekopties. Verander 1 of meer zoek
                opties om uw zoekopdracht te vergroten.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export { OverviewComponent };
