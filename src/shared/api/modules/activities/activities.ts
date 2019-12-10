import { IActivityCard } from "@app/api/core/activity-card";
import { IOverviewFilterCategoryItem } from "../overview";

export interface IActivitiesModule {
  filterSections: IOverviewFilterCategoryItem[];
  items: IActivityCard[];
  title: string;
}
