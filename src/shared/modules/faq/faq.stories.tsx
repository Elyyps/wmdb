import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { FAQComponent } from "./faq.component";
import { generateFAQData } from "@app/api/modules/faq/end-point";

storiesOf("FAQ", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <FAQComponent faq={generateFAQData()} />);
