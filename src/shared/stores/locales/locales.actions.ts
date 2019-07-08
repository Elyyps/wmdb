import { REDUX } from "@app/constants";

import * as ActionType from "./locales.types";

const setLocale = (payload: ActionType.ILocale) => ({
  type: REDUX.LOCALES.SET_LOCALE,
  ...payload
});

export const localesActions = {
  setLocale
};
