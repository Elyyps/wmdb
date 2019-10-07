import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/modules/core/storybook-provider";
import { Pagination } from "./pagination";

storiesOf("Button", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation currentPage=1 ", () => <Pagination totalItems={23} currentPage={1} />)
  .add("Basic implementation currentPage=6 ", () => <Pagination totalItems={23} currentPage={6} />)
  .add("Basic implementation currentPage=23 ", () => <Pagination totalItems={23} currentPage={23} />);
