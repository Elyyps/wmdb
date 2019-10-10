import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { OverviewFilterComponent } from "./overview-filter.component";
import { dummyOverviewFilterData } from "@app/api/core/overview-filter";

storiesOf("OverviewFilter", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <OverviewFilterComponent
      searchPlaceholder="Plaats, regio of provincie"
      range={0}
      onFilterChange={jest.fn()}
      {...dummyOverviewFilterData}
    />
  ));
