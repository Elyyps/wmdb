import { IDropdownItem } from "@app/api/core/dropdown-item";
import Placeholder from "@assets/img01.png";

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

export const generateDummyHeroModule = (): IHeroModule => ({
  buttonTitle: "Toon 500 uijtes",
  dropdownCompanyItems: [
    {
      value: 1,
      text: "Item #1"
    },
    {
      value: 2,
      text: "Item #2"
    },
    {
      value: 3,
      text: "Item #3"
    }
  ],
  dropdownCompanyPlaceholder: "Kies een bedrijfsuitje categorie",
  image: Placeholder,
  keywordPlaceholder: "Zoekwoord",
  numberPersonsPlaceholder: "Aantal personen",
  provincePlaceholder: "Provincie of Plaats",
  title: "Wat gaan we dít jaar doen?! Vergelijk online gemakkelijk álle bedrijfsuitjes van Nederland"
});
