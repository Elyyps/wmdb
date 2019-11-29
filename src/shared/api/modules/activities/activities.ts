import { IActivityCard } from "@app/api/core/activity-card";

export interface IActivitiesModule {
  items: IActivityCard[];
  title: string;
}
