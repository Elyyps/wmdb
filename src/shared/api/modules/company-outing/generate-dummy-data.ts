import { ICompanyOuting } from "./company-outing";
import ETEN from "@assets/icons/eten.svg";
import Image from "@assets/img02.png";

export const generateCompanyOutingDummyData = (): ICompanyOuting => ({
  title: "Alles over het kiezen van een bedrijfsuitje",
  button: { title: "Bekijk álle blogs", url: "#" },
  cards: [
    {
      icon: ETEN,
      title: "Blog titel",
      content:
        "Lorem ipsum dolor sit amet, consectetu dipiscing elit. Duis quis tortor lectus. Aliquam vel dignissim nunc…",
      image: Image,
      data: "18 sep. 2017",
      button: {
        title: "Lees meer",
        url: "#"
      }
    },
    {
      icon: ETEN,
      title: "Blog titel",
      content:
        "Lorem ipsum dolor sit amet, consectetu dipiscing elit. Duis quis tortor lectus. Aliquam vel dignissim nunc…",
      image: Image,
      data: "18 sep. 2017",
      button: {
        title: "Lees meer",
        url: "#"
      }
    },
    {
      icon: ETEN,
      title: "Blog titel",
      content:
        "Lorem ipsum dolor sit amet, consectetu dipiscing elit. Duis quis tortor lectus. Aliquam vel dignissim nunc…",
      image: Image,
      data: "18 sep. 2017",
      button: {
        title: "Lees meer",
        url: "#"
      }
    }
  ]
});
