import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { LinkComponent } from "./link.component";
import IconDefault from "@assets/icons/chevron-down.svg";

storiesOf("Link", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation primary", () => <LinkComponent to="/">Primary</LinkComponent>)

  .add("Basic implementation primary", () => (
    <LinkComponent icon={IconDefault} to="/">
      Primary w Icon
    </LinkComponent>
  ))

  .add("Basic implementation secondary", () => (
    <LinkComponent variant="secondary" icon={IconDefault} to="/">
      Secondary w Icon
    </LinkComponent>
  ))

  .add("Basic implementation tertiary", () => (
    <LinkComponent animated variant="tertiary" icon={IconDefault} to="/">
      Tertiary w Icon animated
    </LinkComponent>
  ));
