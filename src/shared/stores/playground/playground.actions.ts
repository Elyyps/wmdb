import { REDUX } from "@app/constants";

import * as ActionType from "./playground.types";

const setTestItems = (payload: ActionType.ITestItems) => ({
  type: REDUX.PLAYGROUND.SET_ITEMS,
  ...payload
});

export const playgroundActions = {
  setTestItems
};
