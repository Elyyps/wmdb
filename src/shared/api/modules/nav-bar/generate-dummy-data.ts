import { INavBarModule } from "./nav-bar.module";

export const generateDummyNavbarData = (): INavBarModule => ({
  closeText: "Sluiten",
  links: [
    { title: "Helpdesk", url: "/contact" },
    { title: "Nieuwsbrief", url: "/info-page" },
    { title: "Mijn uitjes", url: "/overzicht" }
  ],
  logo: "",
  title: "Menu",
  menuItems: [
    { title: "Helpdesk", url: "/contact" },
    { title: "Nieuwsbrief", url: "/info-page" },
    { title: "Mijn uitjes", url: "/overzicht" }
  ]
});
