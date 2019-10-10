import { ICompanyOutingCard } from "@app/api/core/company-outing-card";
import { ILink } from "@app/api/core/link";

export interface ICompanyOutingModule {
  button: ILink;
  cards: ICompanyOutingCard[];
  title: string;
}
