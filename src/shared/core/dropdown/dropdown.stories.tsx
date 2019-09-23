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
        { label: "Label item #1", value: "value item #1" },
        { label: "Label item #2", value: "value item #2" },
        { label: "Label item #3", value: "value item #3" },
        { label: "Label item #4", value: "value item #4" },
        { label: "Label item #5", value: "value item #5" },
        { label: "Label item #6", value: "value item #6" }
      ]}
      placeholder="placeholder"
    />
  ));
