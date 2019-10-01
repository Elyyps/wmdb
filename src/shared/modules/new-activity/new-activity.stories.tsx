import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { NewActivityComponent } from "./new-activity.component";
import { generateNewActivityData } from "@app/api/modules/new-activity/end-point";

storiesOf("NewActivity", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <NewActivityComponent newActivity={generateNewActivityData()} />);
