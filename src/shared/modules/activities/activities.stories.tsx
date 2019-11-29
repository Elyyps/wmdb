import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ActivitiesComponent } from "./activities.component";
import { generateActivitiesData } from "@app/api/modules/activities/end-point";

storiesOf("Activities", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <ActivitiesComponent activitiesModule={generateActivitiesData()} />);
