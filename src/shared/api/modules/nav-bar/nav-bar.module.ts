import { ILink } from "@app/core/link";

export interface INavBarModule {
  closeText: string;
  links: ILink[];
  logo: string;
  title: string;
}
