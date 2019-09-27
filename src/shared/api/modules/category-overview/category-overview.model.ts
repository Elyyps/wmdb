export interface ICategoryOverviewModule {
  backgroundColor?: string;
  items?: ICategoryCardModel[];
  paddingBottom?: string;
  paddingTop?: string;
  title?: string;
}

export interface ICategoryCardModel {
  count?: number;
  icon?: string;
  image?: string;
  link: string;
  title?: string;
}
