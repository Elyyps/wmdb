import { ICompanyOutingCard } from "@app/api/core/company-outing-card";

export interface IBlogOverview {
  cards: ICompanyOutingCard[];
  filterOptions: IBlogOverviewFilter[];
  title: string;
}
export interface IBlogOverviewFilter {
  icon: string;
  title: string;
}
