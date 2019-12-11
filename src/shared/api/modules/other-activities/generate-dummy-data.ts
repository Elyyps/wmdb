import { IOtherActivitiesModule } from "./other-activities";
import Image1 from "@assets/img-1.jpg";
import Image2 from "@assets/header-1.png";
import Image3 from "@assets/oasis.jpg";
import Image4 from "@assets/img-blog.jpg";

export const generateOtherActivitiesModuleData = (): IOtherActivitiesModule => ({
  buttonTitleClosed: "Bekijk 6 meer activiteiten",
  buttonTitleOpened: "Bekijk 6 minder activiteiten",
  numberItemsShowing: 4,
  title: "Andere activiteiten van dit bedrijf",
  cards: [
    { title: "U Deugt Wij Deugen", buttonText: "", image: Image1 },
    { title: "The Ultimate Expedition", buttonText: "", image: Image2 },
    { title: "Het Mislukte Feest", buttonText: "", image: Image3 },
    { title: "Hou van Holland Stadsspel", buttonText: "", image: Image4 },
    { title: "Het Mislukte Feest", buttonText: "", image: Image1 },
    { title: "Hou van Holland Stadsspel", buttonText: "", image: Image2 },
    { title: "Het Mislukte Feest", buttonText: "", image: Image3 },
    { title: "Hou van Holland Stadsspel", buttonText: "", image: Image4 },
    { title: "Het Mislukte Feest", buttonText: "", image: Image1 },
    { title: "Hou van Holland Stadsspel", buttonText: "", image: Image2 }
  ]
});
