import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { HtmlRenderComponent } from "./html-render.component";

storiesOf("HtmlRender", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <HtmlRenderComponent html="<h1>HTML rendered</h1><br/>From a string/>" />);
