import { IOverviewFilterItem, IOutingCard } from "./overview";
import { getCardsAmount } from "./dummy-data";

interface ICardsPaginatedReturn {
  cards: IOutingCard[];
  total: number;
}

export const getCardsPaginated = (skip: number, take: number, filter: IOverviewFilterItem): ICardsPaginatedReturn => {
  const CARDS_AMOUNT = 200;
  let cards = getCardsAmount(CARDS_AMOUNT);

  if (filter.filterText) {
    const filterTextCapitalized = filter.filterText.toUpperCase();
    cards = cards.filter(
      item =>
        item.title &&
        item.title
          .toUpperCase()
          .trim()
          .includes(filterTextCapitalized)
    );
  }
  console.log("filter", filter.checkedItems);
  if (filter.checkedItems.length > 0) {
    const checkedCategories = filter.checkedItems.filter(item => item.isChecked).map(item => item.id);
    console.log(checkedCategories);
    cards = cards.filter(
      card => card.categoriesId && card.categoriesId.some(item => checkedCategories.indexOf(item) >= 0)
    );
  }

  const total = cards.length / take;
  cards = cards.slice(skip, skip + take);

  return {
    cards,
    total
  };
};
