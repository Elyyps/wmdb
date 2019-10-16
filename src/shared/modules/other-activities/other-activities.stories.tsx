import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { OtherActivitiesComponent } from "./other-activities.component";
import { generateOtherActivitiesData } from "@app/api/modules/other-activities/end-points";

storiesOf("OtherActivities", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <OtherActivitiesComponent otherActivitiesModule={generateOtherActivitiesData()} />
  ));
