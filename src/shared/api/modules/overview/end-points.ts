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
  if (filter.checkedItems.length > 0) {
    const checkedCategories = filter.checkedItems.filter(item => item.isChecked).map(item => item.id);
    cards = cards.filter(
      card => card.categoriesId && card.categoriesId.some(item => checkedCategories.indexOf(item) >= 0)
    );
  }

  const total = cards.length / take;
  cards = cards.slice(skip, skip + take);

  const cardAd: IOutingCard = {
    variant: "Ad",
    title: "Herfstspecial - bekijk nu de nieuwsbrief!",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/103/1200/800",
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
  };
  if (cards.length === 8) {
    cards = [...cards.slice(0, 2), cardAd, ...cards.slice(2, cards.length)];
  }

  return {
    cards,
    total
  };
};
