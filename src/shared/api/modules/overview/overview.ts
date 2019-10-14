import { ICheckboxUnique } from "@app/api/core/checkbox";
import { ILink } from "@app/api/core/link";

export interface IOverviewModule {
  filter: IOverviewFilterCategoryItem[];
}

export interface IOverviewFilterCategoryItem {
  checkboxes: any;
  title: string;
}

export interface IOverviewFilterItem {
  checkedItems: ICheckboxUnique[];
  filterText: string;
  keyword: string;
  range: number;
}

export interface IOutingCard {
  button: ILink;
  categoriesId?: number[];
  content: string;
  dataIcon?: string;
  date?: {
    end: string;
    start: string;
  };
  image?: string[];
  maximumPersons: number;
  minimumPersons: number;
  modify?: string;
  subtitle: string;
  title: string;
  variant?: string;
}
