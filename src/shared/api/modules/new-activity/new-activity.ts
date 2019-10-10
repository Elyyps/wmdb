import { IOutingCard } from "@app/api/core/outing-card";

export interface INewActivityModule {
  cards: IOutingCard[];
  title: string;
}
