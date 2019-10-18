import { IEventCard } from "@app/api/core/event-card";

export interface IOtherActivitiesModule {
  buttonTitleClosed: string;
  buttonTitleOpened: string;
  cards: IEventCard[];
  numberItemsShowing: number;
  title: string;
}
