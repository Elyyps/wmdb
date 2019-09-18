import { INavBarModule } from "./nav-bar.module";

export const generateDummyNavbarData = (): INavBarModule => ({
  closeText: "Sluiten",
  links: [{ title: "Helpdesk", url: "" }, { title: "Nieuwsbrief", url: "" }, { title: "Mijn uitjes", url: "" }],
  logo: "",
  title: "Menu"
});
