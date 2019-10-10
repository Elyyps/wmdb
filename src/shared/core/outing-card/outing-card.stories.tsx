import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { OutingCardComponent } from "./outing-card.component";
import { getCardsAmount } from "@app/api/modules/overview";

storiesOf("OutingCard", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <OutingCardComponent {...getCardsAmount(1)[0]} />);
