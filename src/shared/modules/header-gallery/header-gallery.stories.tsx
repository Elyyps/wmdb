import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { HeaderGalleryComponent } from "./header-gallery.component";

import { generateGalleryData } from "@app/api/modules/header-gallery/end-point";

storiesOf("HeaderGallery", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <HeaderGalleryComponent headerGallery={generateGalleryData()} />);
