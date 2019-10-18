import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ContactComponent } from "./contact.component";
import { generateContactData } from "@app/api/modules/contact/end-point";

storiesOf("Contact", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <ContactComponent contactModule={generateContactData()} />);
