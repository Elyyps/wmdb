import PlaceholderImage from "@assets/img02.png";
import SPEL from "@assets/icons/spel.svg";
import ETEN from "@assets/icons/eten.svg";
import ROOMS from "@assets/icons/rooms.svg";
import { IArrowPanelListComponentProps } from "../../core/arrow-panel-list/arrow-panel-list.component";

export const GenerateDummyArrowPanelListData = () => ({
  title: "Spel & Ontspanning",
  icon: ETEN,
  items: [
    {
      title: "Wat is Lorem Ipsum?",
      link: "/"
    },
    {
      title: "Hoe lang zijn mijn aanbiedingen of vacatures zichtbaar op indebuurt?",
      link: "/"
    },
    {
      title: "Hoe kan ik mijn (wekelijkse) aanbieding of vacature aanleveren?",
      link: "/"
    },
    {
      title: "Hoe lang staat mijn artikel op de homepagina, waar komt het vandaan?",
      link: "/"
    },
    {
      title: "Waar kan ik het vinden?",
      link: "/"
    },
    {
      title: "Waar kan ik het vinden?",
      link: "/"
    }
  ],
  linkMore: {
    title: "Alle veelgestelde vragen over musea",
    link: "/"
  }
});
