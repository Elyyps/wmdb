import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { FooterComponent } from "./footer.component";
import { generateFooterData } from "@app/api/modules/footer/end-point";

storiesOf("Footer", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <FooterComponent footerModule={generateFooterData()} />);
