import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { DatePickerComponent } from "./date-picker.component";

storiesOf("DatePicker", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <DatePickerComponent onBlur={() => ""} onChange={() => ""} id={""} />);
