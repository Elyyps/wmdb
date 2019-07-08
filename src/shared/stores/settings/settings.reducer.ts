import { REDUX } from "@app/constants/redux";
import { Action } from "redux";
import * as ActionType from "./settings.types";

export interface ISettingsState {
  isMobile: boolean;
}

const INITIAL_STATE: ISettingsState = {
  isMobile: false
};

export const settingsReducer = (state: ISettingsState = INITIAL_STATE, action: Action): ISettingsState => {
  switch (action.type) {
    case REDUX.SETTINGS.SET_IS_MOBILE: {
      const { isMobile } = <ActionType.IMobileSetting>action;

      return { ...state, isMobile };
    }
    default: {
      return state;
    }
  }
};
