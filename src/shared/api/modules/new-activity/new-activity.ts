import { IOutingCard } from "@app/api/core/outing-card";

export interface INewActivity {
  cards: IOutingCard[];
  title: string;
}
