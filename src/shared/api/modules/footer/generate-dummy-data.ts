import { IFooterModule } from "./footer.module";
import Logo from "@assets/WMDB.svg";

export const generateDummyFooterData = (): IFooterModule => ({
  links: [
    {
      title: "info@wmdb.nl",
      url: "/"
    },
    {
      title: "Web-Effects",
      url: "/"
    },
    {
      title: "Algemene voorwaarden",
      url: "/"
    },
    {
      title: "Privacystatement",
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
