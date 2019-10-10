import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { AdBannerComponent } from "./ad-banner.component";
import RECTANGLE from "@assets/rectangle.png";

storiesOf("AdBanner", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => (
    <AdBannerComponent
      content={"Surfen? Dat doe je in Zeeland."}
      backgroundImage={RECTANGLE}
      button={{ title: "Meer info", url: "/" }}
      advertisement={"Advertentie"}
    />
  ));
