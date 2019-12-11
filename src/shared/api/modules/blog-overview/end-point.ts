import { generateBlogOverviewDummyData, generateCards } from "./dummy-data";
import { ICompanyOutingCard } from "@app/api/core/company-outing-card";

export const generateBlogOverviewData = generateBlogOverviewDummyData;
const amountOfCards = 50;
export const getCardsWithPagination = (skip: number, take: number): ICompanyOutingCard[] => {
  let cards: ICompanyOutingCard[] = generateCards(amountOfCards);
  cards = cards.slice(skip, take + skip);

  return cards;
};
