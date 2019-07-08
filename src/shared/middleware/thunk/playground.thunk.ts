import { Dispatch } from "react-redux";
import { ITestItem } from "@app/api";
import { playgroundActions } from "@app/stores/playground";

const getItems = (search: string) => async (dispatch: Dispatch<any>) => {
  // TODO: Make API call here
  const result: ITestItem[] = [{ name: "item 1", amount: 20 }, { name: "item 2", amount: 15 }];

  dispatch(playgroundActions.setTestItems({ testItems: result }));
};

export const playgroundThunks = {
  getItems
};
