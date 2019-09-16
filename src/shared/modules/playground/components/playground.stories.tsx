import React from "react";
import { storiesOf } from "@storybook/react";

import { PlaygroundComponent } from "./playground.component";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";

const notes = require("./playground.md");

storiesOf("Playground", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add(
    "Basic implementation",
    () => (
      <PlaygroundComponent
        testItems={[
          {
            amount: 22,
            name: "Item 1"
          },
          {
            amount: 33,
            name: "Item 2"
          }
        ]}
        // tslint:disable-next-line
        getItems={() => {}}
      />
    ),
    {
      notes
    }
  );
