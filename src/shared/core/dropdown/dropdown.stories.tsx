import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { Dropdown } from "./dropdown.component";

storiesOf("Dropdown", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <Dropdown
      options={[
        { text: "Label item #1", value: "value item #1" },
        { text: "Label item #2", value: "value item #2" },
        { text: "Label item #3", value: "value item #3" },
        { text: "Label item #4", value: "value item #4" },
        { text: "Label item #5", value: "value item #5" },
        { text: "Label item #6", value: "value item #6" }
      ]}
      placeholder="placeholder"
    />
  ));
