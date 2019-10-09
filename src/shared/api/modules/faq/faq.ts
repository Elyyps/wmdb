import { IExpendableItem } from "@app/api/core/expendable-item";
export interface IFAQ {
  formContent: string;
  formTitle: string;
  items: IExpendableItem[];
  title: string;
}
