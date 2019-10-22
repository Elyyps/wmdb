import { IOverviewFilterCategoryItem } from "@app/api/modules/overview";
export interface ICategoryOverviewModule {
  backgroundColor?: string;
  filterSections: IOverviewFilterCategoryItem[];
  items?: ICategoryCardModel[];
  paddingBottom?: string;
  paddingTop?: string;
  title?: string;
}

export interface ICategoryCardModel {
  count?: number;
  filterSectionId?: number;
  icon?: string;
  image?: string;
  link?: string;
  title?: string;
}
