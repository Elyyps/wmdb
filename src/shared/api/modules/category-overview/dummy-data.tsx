import PlaceholderImage from "@assets/img02.png";
import { ICategoryOverviewModule } from "./category-overview.model";
import SPEL from "@assets/icons/spel.svg";

const CategoryOverviewDummyData: ICategoryOverviewModule = {
  backgroundColor: "#e8f2fc",
  paddingBottom: "72px",
  paddingTop: "72px",
  title: "Kies direct een categorie om het aanbod te bekijken!",
  items: [
    {
      title: "Musea",
      count: 200,
      image: PlaceholderImage,
      icon: SPEL,
      link: "/"
    },
    {
      title: "Musea",
      count: 200,
      image: PlaceholderImage,
      icon: SPEL,
      link: "/"
    },
    {
      title: "Musea",
      count: 200,
      image: PlaceholderImage,
      icon: SPEL,
      link: "/"
    },
    {
      title: "Musea",
      count: 200,
      image: PlaceholderImage,
      icon: SPEL,
      link: "/"
    },
    {
      title: "Musea",
      count: 200,
      image: PlaceholderImage,
      icon: SPEL,
      link: "/"
    },
    {
      title: "Musea",
      count: 20,
      image: PlaceholderImage,
      icon: SPEL,
      link: "/"
    },
    {
      title: "Musea",
      image: PlaceholderImage,
      link: "/"
    },
    {
      title: "Musea",
      image: PlaceholderImage,
      link: "/"
    },
    {
      title: "Musea",
      image: PlaceholderImage,
      link: "/"
    }
  ]
};

export { CategoryOverviewDummyData };
