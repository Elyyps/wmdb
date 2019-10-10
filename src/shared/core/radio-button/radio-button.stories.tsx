import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { RadioButtonComponent } from "./radio-button.component";

storiesOf("RadioButton", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <RadioButtonComponent id={"2"} name={"name"} value={"value"} />);
