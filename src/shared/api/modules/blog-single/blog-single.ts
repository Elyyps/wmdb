import { ILink } from "@app/api/core/link";

export interface IBlogSingle {
  content: string;
  headerImage: string;
  path: ILink[];
  title: string;
}
