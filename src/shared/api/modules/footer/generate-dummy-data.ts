import { IFooter } from "./footer.module";

export const generateDummyFooterData = (): IFooter => ({
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
  ]
});
