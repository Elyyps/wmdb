
import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { OverviewComponent } from "./overview.component";
import { generateDummyOverviewModule } from "@app/api/modules/overview";

storiesOf("Overview", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <OverviewComponent overviewModule={generateDummyOverviewModule()} />);

  