import { ILink } from '@app/api/core/link';

export interface IFaqOverviewModule {
  items: IFaqSection[];
  title: string;
}

export interface IFaqSection {
  icon?: string;
  items: ILink[];
  linkMore?: ILink;
  title: string;
}