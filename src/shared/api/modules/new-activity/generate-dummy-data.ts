import { INewActivityModule } from "./new-activity";
import PlaceholderImage1 from "@assets/img-big.jpg";

import PlaceholderImage from "@assets/img02.png";
import ROOMS from "@assets/icons/rooms.svg";
export const generateNewActivityDummyData = (): INewActivityModule => ({
  cards: [
    {
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
    },
    {
      title: "Escape City - Het ontsnappingsspel van Mokum",
      subtitle: "Citygames in Amsterdam",
      image: [PlaceholderImage, PlaceholderImage1, PlaceholderImage, PlaceholderImage],
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
    }
  ],
  title: "Nieuwe activiteiten"
});
