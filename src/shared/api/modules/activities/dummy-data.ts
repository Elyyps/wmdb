import { IActivitiesModule } from "./activities";
import INCENTIVE from "@assets/icons/incentive.svg";
import SPEL from "@assets/icons/spel.svg";
import SPORT from "@assets/icons/sportief.svg";
import ETEN from "@assets/icons/eten.svg";
import CREATIVE from "@assets/icons/creatief.svg";

import TEAMBUILDING from "@assets/icons/teambuilding.svg";
import { GenerateDummyFilterOverview } from "../overview";
export const generateActivitiesDummyData = (): IActivitiesModule => ({
  items: [
    { color: "#b0cf6d", icon: ETEN, title: "Eten, Drinken & Feesten", total: 500,filterSectionId:5 },
    { color: "#71abde", icon: TEAMBUILDING, title: "Teambuilden", total: 500 ,filterSectionId:6},
    { color: "#f8b272", icon: INCENTIVE, title: "Incentives", total: 500,filterSectionId:7 },
    { color: "#ef7478", icon: SPEL, title: "Spel & Ontspanning", total: 500,filterSectionId:1 },
    { color: "#d6b6d8", icon: SPORT, title: "Sportief & Actie(f)", total: 500,filterSectionId:2 },
    { color: "#75c5c3", icon: CREATIVE, title: "Creatieve Uitjes", total: 500,filterSectionId:3 },
    { color: "#ffdf7a", icon: INCENTIVE, title: "Workshops", total: 500,filterSectionId:4 }
  ],
  title: "Bekijk ook andere activiteiten!",
  filterSections: GenerateDummyFilterOverview(),

});
