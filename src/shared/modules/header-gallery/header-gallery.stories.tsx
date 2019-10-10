import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { HeaderGalleryComponent } from "./header-gallery.component";
import Oasis from "@assets/oasis.jpg";
import Image from "@assets/img02.png";
import Rectangle from "@assets/rectangle.png";
import Big from "@assets/img-big.jpg";
import Grid from "@assets/img-grid.png";
const imageList = [Oasis, Image, Oasis, Big, Grid, Rectangle];
storiesOf("HeaderGallery", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <HeaderGalleryComponent images={imageList} />);
