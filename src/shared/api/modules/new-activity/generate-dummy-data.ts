import { INewActivityModule } from "./new-activity";
import { getCardsAmount } from "../overview";
const numberOfCards = 2;
export const generateNewActivityDummyData = (): INewActivityModule => ({
  cards: getCardsAmount(numberOfCards),
  title: "Nieuwe activiteiten"
});
