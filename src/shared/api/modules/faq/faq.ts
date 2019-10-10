import { IExpendableItem } from "@app/api/core/expendable-item";
export interface IFAQModule {
  formContent: string;
  formTitle: string;
  items: IExpendableItem[];
  title: string;
}
