import { ILink } from "./link";

export interface IOutingCard {
  button: ILink;
  content?: string;
  data: {
    icon?: string;
    label: string;
    unit: string;
  };
  date?: {
    end: string;
    start: string;
  };
  image?: string[];
  modify?: string;
  subtitle?: string;
  title?: string;
}
