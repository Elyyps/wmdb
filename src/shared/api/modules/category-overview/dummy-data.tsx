import { ICategoryOverviewModule } from "./category-overview.model";
import SPEL from "@assets/icons/spel.svg";
import ETEN from "@assets/icons/eten.svg";
import SPORT from "@assets/icons/sportief.svg";
import CREATIVE from "@assets/icons/creatief.svg";
import INCENTIVE from "@assets/icons/incentive.svg";
import TEAM from "@assets/icons/teambuilding.svg";
import { GenerateDummyFilterOverview } from "../overview";
const GenerateDummyCategoryOverviewData = (): ICategoryOverviewModule => ({
  backgroundColor: "#e8f2fc",
  paddingBottom: "72px",
  paddingTop: "72px",
  filterSections: GenerateDummyFilterOverview(),
  title: "Kies direct een categorie om het aanbod te bekijken!",
  items: [
    {
      title: "Eten, Drinken & Feesten",
      count: 24,
      filterSectionId: 5,
      image: "https://picsum.photos/id/1/600/400",
      icon: ETEN,
      color: "#b0cf6d"
    },
    {
      title: "Teambuilden",
      count: 24,
      filterSectionId: 6,
      image: "https://picsum.photos/id/20/600/400",
      icon: TEAM,
      color: "#71abde"
    },
    {
      title: "Incentives",
      count: 58,
      filterSectionId: 7,
      image: "https://picsum.photos/id/30/600/400",
      icon: INCENTIVE,
      color: "#f8b272"
    },
    {
      title: "Spel & Ontspanning",
      filterSectionId: 1,
      count: 129,
      image: "https://picsum.photos/id/40/600/400",
      icon: SPEL,
      color: "#ef7478"
    },
    {
      title: "Sportief & Actie(f)",
      filterSectionId: 2,
      count: 59,
      image: "https://picsum.photos/id/50/600/400",
      icon: SPORT,
      color: "#d6b6d8"
    },
    {
      title: "Creative Uitjes",
      count: 70,
      filterSectionId: 3,
      image: "https://picsum.photos/id/60/600/400",
      icon: CREATIVE,
      color: "#75c5c3"
    },
    {
      title: "Workshops",
      filterSectionId: 4,
      image: "https://picsum.photos/id/70/600/400",
      icon: CREATIVE,
      color: "#ffdf7a",
      count: 70
    },
    {
      title: "Helpdesk",
      image: "https://picsum.photos/id/80/600/400",
      link: "/info-page"
    },
    {
      title: "Nieuwsbrief",
      image: "https://picsum.photos/id/90/600/400",
      link: " http://www.gooves.nl/"
    }
  ]
});

export { GenerateDummyCategoryOverviewData };
