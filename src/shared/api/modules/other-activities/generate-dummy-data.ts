import { IOtherActivities } from "./other-activities";
import Oasis from "@assets/oasis.jpg";
import Image from "@assets/img02.png";
import Rectangle from "@assets/rectangle.png";
import Big from "@assets/img-big.jpg";
export const generateOtherActivitiesModuleData = (): IOtherActivities => ({
  button: { title: "Bekijk 6 meer activiteiten", url: "/" },
  title: "Andere activiteiten van dit bedrijf",
  cards: [
    { title: "U Deugt Wij Deugen", buttonText: "", image: Oasis },
    { title: "The Ultimate Expedition", buttonText: "", image: Image },
    { title: "Het Mislukte Feest", buttonText: "", image: Rectangle },
    { title: "Hou van Holland Stadsspel", buttonText: "", image: Big }
  ]
});
