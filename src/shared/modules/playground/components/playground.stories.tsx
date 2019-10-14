import React from "react";
import { storiesOf } from "@storybook/react";

import { PlaygroundComponent } from "./playground.component";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";

const notes = require("./playground.md");

storiesOf("Playground", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <PlaygroundComponent />, {
    notes
  });
