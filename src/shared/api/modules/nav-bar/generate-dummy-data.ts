import { INavBarModule } from "./nav-bar.module";
import Logo from "@assets/WMDB.svg";

export const generateDummyNavbarData = (): INavBarModule => ({
  closeText: "Sluiten",
  links: [
    { title: "Helpdesk", url: "/contact" },
    { title: "Nieuwsbrief", url: "/" },
    { title: "Mijn uitjes", url: "/overzicht" }
  ],
  logo: Logo,
  title: "Menu",
  menuItems: [
    { title: "Helpdesk", url: "/contact" },
    { title: "Nieuwsbrief", url: "/info-page" },
    { title: "Mijn uitjes", url: "/overzicht" }
  ]
});
