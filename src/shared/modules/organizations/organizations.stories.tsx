import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { OrganizationsComponent } from "./organizations.component";
import { generateOrganizationsData } from "@app/api/modules/organizations/end-point";

storiesOf("Organizations", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <OrganizationsComponent locations={generateOrganizationsData()} />);
