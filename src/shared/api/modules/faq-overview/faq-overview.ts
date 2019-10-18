import { ILink } from "@app/api/core/link";

export interface IFaqOverviewModule {
  items: IFaqSection[];
  paddingBottomMobile?: "120px" | "72px" | "40px" | "32px" | "0px";
  paddingTopMobile?: "120px" | "72px" | "40px" | "32px" | "0px";
  title: string;
}

export interface IFaqSection {
  icon?: string;
  items: ILink[];
  linkMore?: ILink;
  title: string;
}
