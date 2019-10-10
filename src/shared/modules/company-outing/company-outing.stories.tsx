import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { CompanyOutingComponent } from "./company-outing.component";
import { generateCompanyOutingData } from "@app/api/modules/company-outing/end-point";

storiesOf("CompanyOuting", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <CompanyOutingComponent companyOutingModule={generateCompanyOutingData()} />);
