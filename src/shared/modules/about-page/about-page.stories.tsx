import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { AboutPageComponent } from "./about-page.component";
import { generateAboutPageData } from "@app/api/modules/about-page/end-point";

storiesOf("AboutPage", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <AboutPageComponent aboutPage={generateAboutPageData()} />);
