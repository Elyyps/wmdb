import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ArrowPanelListComponent } from "./arrow-panel-list.component";

storiesOf("ArrowPanelList", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <ArrowPanelListComponent title="title" />);
