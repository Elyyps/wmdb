import { IFooterModule } from "./footer.module";
import Logo from "@assets/WMDB.svg";

export const generateDummyFooterData = (): IFooterModule => ({
  links: [
    {
      title: "info@wegmetdebaas.nl",
      url: "/"
    },
    {
      title: "Web-Effects",
      url: "/"
    },
    {
      title: "Linkpartners",
      url: "/"
    },
    {
      title: "Privacystatement",
      url: "/"
    },
    {
      title: "Alle bedrijfsuitjes",
      url: "/"
    },
    { title: "Sitemap", url: "/" },
    {
      title: "Algemene voorwaarden",
      url: "/"
    },
    {
      title: "Disclaimer",
      url: "/"
    }
  ],
  logo: Logo,
  facebookURL: "https://www.webbio.nl"
});
