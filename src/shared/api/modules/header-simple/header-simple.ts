import PIC from "@assets/header-1.png";
import IMG2 from "@assets/boat.jpg";
export interface IHeaderSimpleModule {
  picture: string;
  title: string;
}

export const generateDummyHeaderSimpleModule = (): IHeaderSimpleModule => ({
  title: "Diverse citygames in Amsterdam",
  picture: "https://miro.medium.com/max/2472/1*PJb-5yCDn8k68YcDV758pw.jpeg"
});
export const generateAdvertiserWMDBHeaderDummyData = (): IHeaderSimpleModule => ({
  title: "Adverteer op Wegmetdebaas!",
  picture: PIC
});
export const generateOrganizationsHeaderDummyData = (): IHeaderSimpleModule => ({
  title: "Overzicht van Uitjes op WegmetdeBaas.nl",
  picture: IMG2
});
export const generateBlogHeaderDummyData = (): IHeaderSimpleModule => ({
  title: "Blogs",
  picture: IMG2
});
