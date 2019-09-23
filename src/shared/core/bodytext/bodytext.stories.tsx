import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { BodyTextComponent } from "./bodytext.component";

storiesOf("Bodytext", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <BodyTextComponent html="<h1>Plein HTML here</h1>" />);
