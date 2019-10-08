import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { OutingCardComponent } from "./outing-card.component";
import PlaceholderImage from "@assets/img01.png";
import PlaceholderImage1 from "@assets/img02.png";
import ROOMS from "@assets/icons/rooms.svg";
const card = {
  title: "Escape City - Het ontsnappingsspel van Mokum",
  subtitle: "Citygames in Amsterdam",
  image: [PlaceholderImage, PlaceholderImage1, PlaceholderImage, PlaceholderImage1],
  button: {
    title: "Lees meer",
    url: "#"
  },
  data: {
    icon: ROOMS,
    label: "10 - 1000",
    unit: "personen"
  },
  content:
    "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
};
storiesOf("OutingCard", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <OutingCardComponent {...card} />);
