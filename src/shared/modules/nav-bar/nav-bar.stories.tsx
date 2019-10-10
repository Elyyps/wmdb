import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { NavBarComponent } from "./nav-bar.component";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";

storiesOf("NavBar", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <NavBarComponent navbar={generateNavbarData()} />);
