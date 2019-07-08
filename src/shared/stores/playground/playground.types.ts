import { ITestItem } from "@app/api";

interface IAction {
  type?: string;
}

export interface ITestItems extends IAction {
  testItems: ITestItem[];
}
