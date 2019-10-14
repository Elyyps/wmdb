import { ICategoryOverviewModule } from "./category-overview.model";
import SPEL from "@assets/icons/spel.svg";

const GenerateDummyCategoryOverviewData = (): ICategoryOverviewModule => ({
  backgroundColor: "#e8f2fc",
  paddingBottom: "72px",
  paddingTop: "72px",
  title: "Kies direct een categorie om het aanbod te bekijken!",
  items: [
    {
      title: "Eten, Drinken & Feesten",
      count: 500,
      image: "https://picsum.photos/id/1/600/400",
      icon: SPEL,
      link: "/single-wmdb"
    },
    {
      title: "Teambuilden",
      count: 430,
      image: "https://picsum.photos/id/20/600/400",
      icon: SPEL,
      link: "/single-wmdb"
    },
    {
      title: "Incentives",
      count: 430,
      image: "https://picsum.photos/id/30/600/400",
      icon: SPEL,
      link: "/single-wmdb"
    },
    {
      title: "Spel & Ontspanning",
      count: 430,
      image: "https://picsum.photos/id/40/600/400",
      icon: SPEL,
      link: "/single-wmdb"
    },
    {
      title: "Sportief & Actie(f)",
      count: 430,
      image: "https://picsum.photos/id/50/600/400",
      icon: SPEL,
      link: "/single-wmdb"
    },
    {
      title: "Creative Uitjes",
      count: 20,
      image: "https://picsum.photos/id/60/600/400",
      icon: SPEL,
      link: "/single-wmdb"
    },
    {
      title: "Workshops",
      image: "https://picsum.photos/id/70/600/400",
      link: "/single-wmdb"
    },
    {
      title: "Helpdesk",
      image: "https://picsum.photos/id/80/600/400",
      link: "/single-wmdb"
    },
    {
      title: "Niewsbrief",
      image: "https://picsum.photos/id/90/600/400",
      link: "/single-wmdb"
    }
  ]
});

export { GenerateDummyCategoryOverviewData };
