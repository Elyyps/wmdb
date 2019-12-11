import { ICompanyOutingModule } from "./company-outing";

export const generateCompanyOutingDummyData = (): ICompanyOutingModule => ({
  title: "Alles over het kiezen van een bedrijfsuitje",
  button: { title: "Bekijk álle blogs", url: "#" },
  backgroundImage:
    "https://happytovisit.com/glib/3/Visit-Blue-Cave-and-5-Islands-with-Luxury-Speedboat-from-Split-2-19559.png",
  cards: [
    {
      title: "Blog titel",
      content:
        "Lorem ipsum dolor sit amet, consectetu dipiscing elit. Duis quis tortor lectus. Aliquam vel dignissim nunc…",
      image: "https://picsum.photos/id/116/300/200",
      data: "18 sep. 2017",
      button: {
        title: "Lees meer",
        url: "/blog"
      }
    },
    {
      title: "Blog titel",
      content:
        "Lorem ipsum dolor sit amet, consectetu dipiscing elit. Duis quis tortor lectus. Aliquam vel dignissim nunc…",
      image: "https://picsum.photos/id/118/300/200",
      data: "18 sep. 2017",
      button: {
        title: "Lees meer",
        url: "/blog"
      }
    },
    {
      title: "Blog titel",
      content: "Lorem ipsuam vel dignissim nunc…",
      image: "https://picsum.photos/id/115/300/200",
      data: "18 sep. 2017",
      button: {
        title: "Lees meer",
        url: "/blog"
      }
    }
  ]
});
