import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { FAQHeaderComponent } from "./faq-header.component";
import PlaceholderImage2 from "@assets/img03.png";
storiesOf("FAQHeader", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <FAQHeaderComponent
      title={"Veelgestelde vragen"}
      content={"Alle vragen omtrent WegmetdeBaas. Hoe vind je zo snel mogelijk het perfecte uitje?"}
      image={PlaceholderImage2}
    />
  ));
