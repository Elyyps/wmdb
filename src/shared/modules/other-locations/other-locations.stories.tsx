import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { OtherLocationsComponent } from "./other-locations.component";
import { generateOtherLocationsData } from "@app/api/modules/other-locations/end-point";

storiesOf("OtherLocations", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <OtherLocationsComponent otherLocationsModule={generateOtherLocationsData()} />);
