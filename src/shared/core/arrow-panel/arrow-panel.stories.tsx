import React from "react";
import { storiesOf } from "@storybook/react";

import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ArrowPanel } from "./arrow-panel.component";

storiesOf("Arrow panel", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <ArrowPanel title="Title" url="/" />);
