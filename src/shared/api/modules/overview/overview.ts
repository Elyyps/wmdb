import { IButton } from "@app/api/core/button";
import { ICheckboxUnique } from "@app/api/core/checkbox";

export interface IOverviewModule {
  cards: IOutingCard[];
  filter: IOverviewFilterCategoryItem[];
}

export interface IOverviewFilterCategoryItem {
  checkboxes: any;
  title: string;
}

export interface IOverviewFilterItem {
  checkedItems: ICheckboxUnique[];
  filterText: string;
  range: number;
}

export interface IOutingCard {
  button: IButton;
  categoriesId?: number[];
  content?: any;
  data?: {
    icon?: string;
    label: string;
  };
  date?: {
    end: string;
    start: string;
  };
  image?: string[];
  modify?: string;
  subtitle?: string;
  title?: string;
  variant?: string;
}
