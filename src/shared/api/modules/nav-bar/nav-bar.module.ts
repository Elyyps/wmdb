import { ILink } from "@app/core/link";

export interface INavBarModule {
  closeText: string;
  links: ILink[];
  logo: string;
  menuItems: ILink[];
  title: string;
}
