import { INavBarModule } from "./nav-bar.module";
import Logo from "@assets/WMDB.svg";

export const generateDummyNavbarData = (): INavBarModule => ({
  closeText: "Sluiten",
  links: [
    { title: "Alle bedrijfsuitjes", url: "/organisaties" },
    { title: "Helpdesk", url: "/info-page" },
    { title: "Nieuwsbrief", url: "http://www.gooves.nl/", isExternalLink: true },
    { title: "Bekeken uitjes", url: "/overzicht" },
    { title: "Adverteren?", url: "/adverteren" }
  ],
  logo: Logo,
  title: "Menu",
  menuItems: [
    { title: "Alle bedrijfsuitjes", url: "/organisaties" },
    { title: "Helpdesk", url: "/info-page" },
    { title: "Nieuwsbrief", url: "http://www.gooves.nl/", isExternalLink: true },
    { title: "Bekeken uitjes", url: "/overzicht" },
    { title: "Adverteren?", url: "/adverteren" },
    { title: "Blog overview", url: "/blog-overview" }
  ]
});
