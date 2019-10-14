import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { Breadcrumb } from "@app/core/breadcrumb";

storiesOf("Breadcrumb", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <Breadcrumb
      breadcrumbs={[
        { title: "Home", url: "/" },
        { title: "Another page", url: "/" },
        { title: "Current page", url: "" }
      ]}
    />
  ));
