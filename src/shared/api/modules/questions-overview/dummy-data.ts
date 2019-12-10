import { IQuestionsOverview } from "./questions-overview";

export const generateQuestionsOverviewDummyData = (): IQuestionsOverview => ({
  title: "Alle veelgestelde vragen over feest",
  content:
    "In onze FAQ belichten we alle facetten bij het organiseren van je evenement. Antwoorden op vragen en veel handige toepasbare tips.",
  path: [{ title: "Home", url: "/" }, { title: "FAQ", url: "/" }, { title: "Feest", url: "/" }],
  link: [
    { title: "Is er een checklist voor het plannen van een evenement?", url: "" },
    { title: "Wanneer moet u een evenementenverzekering afsluiten?", url: "" },
    { title: "Is een bedrijfsuitje anders dan een teamuitje?", url: "" },
    { title: "Wat zijn de belangrijkste tips bij het organiseren van een event?", url: "" },
    { title: "Hoe organiseert u een goed zakelijk jubileum?", url: "" }
  ]
});
