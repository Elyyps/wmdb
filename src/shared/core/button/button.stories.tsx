import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { Button } from "./button.component";
import Arrow from "@assets/icons/chevron-down.svg";

storiesOf("Button", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <div>
      <Button title="Primary" />
      <Button variant="secondary" title="Secondary" />
      <Button icon={Arrow} title="Primary with Icon" />
    </div>
  ));
