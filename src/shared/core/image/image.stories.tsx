import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { ImageComponent } from "./image.component";
import IconDefault from "@assets/icons/chevron-down.svg";
import Calendar from "@assets/icons/calendar.svg";

import styles from "./image-component.module.scss";

storiesOf("Image Component", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Image should render fine", () => (
    <div className={styles["image-holder"]}>
      <ImageComponent src={Calendar} errorImage={IconDefault} />
    </div>
  ))
  .add("Image should render with default placeholder", () => (
    <div className={styles["image-holder"]}>
      <ImageComponent />
    </div>
  ))
  .add("Image should render with given placeholder", () => (
    <div className={styles["image-holder"]}>
      <ImageComponent errorImage={IconDefault} errorMessage={true} />
    </div>
  ))
  .add("Image should render with given placeholder and text", () => (
    <div className={styles["image-holder"]}>
      <ImageComponent errorImage={Calendar} errorMessage="Custom error message" />
    </div>
  ));
