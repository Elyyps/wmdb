import { INavBarModule } from "./nav-bar.module";
import Logo from "@assets/WMDB.svg";

export const generateDummyNavbarData = (): INavBarModule => ({
  closeText: "Sluiten",
  links: [
    { title: "Helpdesk", url: "/info-page" },
    { title: "Nieuwsbrief", url: "/single-wmdb" },
    { title: "Mijn uitjes", url: "/overzicht" }
  ],
  logo: Logo,
  title: "Menu",
  menuItems: [
    { title: "Helpdesk", url: "/info-page" },
    { title: "Nieuwsbrief", url: "/single-wmdb" },
    { title: "Mijn uitjes", url: "/overzicht" }
  ]
});
