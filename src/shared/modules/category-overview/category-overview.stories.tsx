import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { CategoryOverviewComponent } from "./category-overview.component";
import { GenerateDummyCategoryOverviewData } from "@app/api/modules/category-overview/dummy-data";

storiesOf("CategoryOverview", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <CategoryOverviewComponent categoryOverviewModule={GenerateDummyCategoryOverviewData()} />
  ));
