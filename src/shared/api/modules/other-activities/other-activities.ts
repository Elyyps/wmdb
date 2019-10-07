import { ILink } from "@app/api/core/link/link";
import { IEventCard } from "@app/api/core/event-card";

export interface IOtherActivities {
  button: ILink;
  cards: IEventCard[];
  title: string;
}
