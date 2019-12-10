import { ILink } from "@app/api/core/link";

export interface IQuestionsOverview {
  content: string;
  link: ILink[];
  path: ILink[];
  title: string;
}
