import { Action } from "redux";

import { REDUX } from "@app/constants";
import * as ActionType from "./playground.types";
import { ITestItem } from "@app/api";

export interface IPlaygroundState {
  testItems: ITestItem[];
}

const INITIAL_STATE: IPlaygroundState = {
  testItems: []
};

export const playgroundReducer = (state: IPlaygroundState = INITIAL_STATE, action: Action): IPlaygroundState => {
  switch (action.type) {
    case REDUX.PLAYGROUND.SET_ITEMS: {
      const { testItems } = <ActionType.ITestItems>action;

      return { ...state, testItems };
    }
    default: {
      return state;
    }
  }
};
