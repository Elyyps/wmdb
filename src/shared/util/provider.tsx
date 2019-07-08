import React from "react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";

import { IntlProviderContainer } from "@app/translations/intl-provider.container";
import { configureStore, getInitialState } from "@app/stores";
import createHistory from "@app/stores/history";

const history = createHistory();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
  window.store ||
  configureStore({
    initialState: getInitialState(),
    history
  });

interface IProps {
  children: any;
}

const ProviderWrapper = (props: IProps) => (
  <Provider store={store}>
    <IntlProviderContainer>
      <div>
        <MemoryRouter initialEntries={["/"]}>{props.children}</MemoryRouter>
      </div>
    </IntlProviderContainer>
  </Provider>
);

const withProvider = (story: () => void) => <ProviderWrapper>{story()}</ProviderWrapper>;

export { withProvider };
