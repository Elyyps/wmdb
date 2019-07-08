import { Action } from "redux";

import { REDUX, LOCALES } from "@app/constants";
import * as ActionType from "./locales.types";

const nlTranslations = require("@app/translations/nl.json");
const enTranslations = require("@app/translations/en.json");

export interface ILocalesState {
  locale: string;
  messages: any;
}

const INITIAL_STATE: ILocalesState = {
  locale: LOCALES.NL,
  messages: nlTranslations
};

export const localesReducer = (state: ILocalesState = INITIAL_STATE, action: Action): ILocalesState => {
  switch (action.type) {
    case REDUX.LOCALES.SET_LOCALE: {
      const { locale } = <ActionType.ILocale>action;
      let messages;
      switch (locale) {
        case LOCALES.NL:
          messages = nlTranslations;
          break;
        case LOCALES.EN:
          messages = enTranslations;
          break;
        default:
          messages = nlTranslations;
      }

      return { ...state, locale, messages };
    }
    default: {
      return state;
    }
  }
};
