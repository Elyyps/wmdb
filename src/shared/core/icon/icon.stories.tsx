import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { IconComponent } from "./icon.component";
import IconDefault from "@assets/icons/chevron-down.svg";
storiesOf("Icon", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation of icon component, stroke and stroke width given", () => (
    <IconComponent icon={IconDefault} strokeColor="red" strokeWidth="2px" size="24px" />
  ))
  .add("Basic implementation of icon component, fill given", () => (
    <IconComponent icon={IconDefault} fillColor="red" size="24px" />
  ))
  .add("Basic implementation of icon component, stroke and fill given", () => (
    <IconComponent icon={IconDefault} strokeColor="red" fillColor="red" size="24px" />
  ))
  .add("Basic implementation of icon component, only size given", () => (
    <IconComponent icon={IconDefault} size="24px" />
  ));
