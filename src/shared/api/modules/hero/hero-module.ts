import { IDropdownItem } from "@app/api/core/dropdown-item";
import Placeholder from "@assets/img01.png";
import { GenerateDummyFilterOverview } from "../overview/dummy-data";

export interface IHeroModule {
  buttonTitle: string;
  dropdownCompanyItems: IDropdownItem[];
  dropdownCompanyPlaceholder: string;
  image: string;
  keywordPlaceholder: string;
  numberPersonsPlaceholder: string;
  provincePlaceholder: string;
  title: string;
}

const categoriesData = GenerateDummyFilterOverview().map((item, key) => ({
  text: item.title,
  value: key
}));

export const generateDummyHeroModule = (): IHeroModule => ({
  buttonTitle: "Toon 500 uijtes",
  dropdownCompanyItems: categoriesData,
  dropdownCompanyPlaceholder: "Kies een bedrijfsuitje categorie",
  image: Placeholder,
  keywordPlaceholder: "Zoekwoord",
  numberPersonsPlaceholder: "Aantal personen",
  provincePlaceholder: "Provincie of Plaats",
  title: "Wat gaan we dít jaar doen?! Vergelijk online gemakkelijk álle bedrijfsuitjes van Nederland"
});
