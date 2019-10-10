import { INewActivityModule } from "./new-activity";
import { getCardsAmount } from "../overview";
export const generateNewActivityDummyData = (): INewActivityModule => ({
  cards: getCardsAmount(2),
  title: "Nieuwe activiteiten"
});
