import Placeholder from "@assets/img01.png";
import { GenerateDummyFilterOverview } from "../overview/dummy-data";
import { IOverviewFilterCategoryItem } from "@app/api/modules/overview";

export interface IHeroModule {
  buttonTitle: string;
  dropdownCompanyPlaceholder: string;
  filterSections: IOverviewFilterCategoryItem[];
  image: string;
  keywordPlaceholder: string;
  numberPersonsPlaceholder: string;
  provincePlaceholder: string;
  title: string;
}

export interface ICategoriesDropdownItems {
  text: string;
  value: number;
}
const filterItems = GenerateDummyFilterOverview();

export const generateDummyHeroModule = (): IHeroModule => ({
  buttonTitle: "Toon 500 uitjes",
  filterSections: filterItems,
  dropdownCompanyPlaceholder: "Kies een bedrijfsuitje categorie",
  image: Placeholder,
  keywordPlaceholder: "Zoekwoord",
  numberPersonsPlaceholder: "Aantal personen",
  provincePlaceholder: "Provincie of Plaats",
  title: "Wat gaan we dít jaar doen?! Vergelijk online gemakkelijk álle bedrijfsuitjes van Nederland"
});
