import { IBlogOverview } from "./blog-overview";
import ETEN from "@assets/icons/eten.svg";
import { ICompanyOutingCard } from "@app/api/core/company-outing-card";
const amountOfCards = 50;
export const generateBlogOverviewDummyData = (): IBlogOverview => ({
  title: "Alles over het kiezen van een locatie",
  filterOptions: [
    { title: "Vergaderen & Congres", icon: ETEN },
    { title: "Congres", icon: ETEN },
    { title: "Trouwen", icon: ETEN },
    { title: "Feest", icon: ETEN }
  ],
  cards: generateCards(amountOfCards)
});
export const generateCards = (amount: number): ICompanyOutingCard[] => {
  const totalCards: ICompanyOutingCard[] = [];
  for (let i = 0; i < amount; i += 1) {
    totalCards.push({
      title: `Dagje weg in de herfstvakantie? Bekijk deze musea eens! ${i}`,
      content:
        "Lorem ipsum dolor sit amet, consectetu dipiscing elit. Duis quis tortor lectus. Aliquam vel dignissim nunc",
      image: "https://picsum.photos/id/116/300/200",
      data: "18 sep. 2017",
      button: {
        title: "Lees meer",
        url: "/blog"
      }
    });
  }

  return totalCards;
};
