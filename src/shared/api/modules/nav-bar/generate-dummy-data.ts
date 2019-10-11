import { INavBarModule } from "./nav-bar.module";

export const generateDummyNavbarData = (): INavBarModule => ({
  closeText: "Sluiten",
  links: [
    { title: "Helpdesk", url: "/contact" },
    { title: "Nieuwsbrief", url: "/" },
    { title: "Mijn uitjes", url: "/overzicht" }
  ],
  logo: "",
  title: "Menu",
  menuItems: [{ title: "Lorem1", url: "" }, { title: "Lorem2", url: "" }, { title: "Lorem3", url: "" }]
});
