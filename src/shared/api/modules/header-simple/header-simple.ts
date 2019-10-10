export interface IHeaderSimpleModule {
  picture: string;
  title: string;
}

export const generateDummyHeaderSimpleModule = (): IHeaderSimpleModule => ({
  title: "Diverse citygames in Amsterdam",
  picture: "https://miro.medium.com/max/2472/1*PJb-5yCDn8k68YcDV758pw.jpeg"
});
