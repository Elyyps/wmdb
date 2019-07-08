import { connect, MapStateToProps } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";

import nl from "react-intl/locale-data/nl";
import en from "react-intl/locale-data/en";

import { IAppState } from "@app/stores";

interface IProps {}

interface IStateProps {}
interface IDispatchProps {}

addLocaleData([...nl, ...en]);

const mapStateToProps: MapStateToProps<IStateProps, IProps, IAppState> = state => {
  const { locale, messages } = state.locales;

  return {
    locale,
    messages
  };
};

export type IntlContainerProps = IStateProps & IDispatchProps;
export const IntlProviderContainer = connect(mapStateToProps)(IntlProvider);
