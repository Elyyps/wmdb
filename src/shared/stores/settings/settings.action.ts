import { REDUX } from "@app/constants";

import * as ActionType from "./settings.types";

const setIsMobile = (payload: ActionType.IMobileSetting) => ({
  type: REDUX.SETTINGS.SET_IS_MOBILE,
  ...payload
});

export const settingsActions = {
  setIsMobile
};
