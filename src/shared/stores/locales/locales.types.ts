interface IAction {
  type?: string;
}

export interface ILocale extends IAction {
  locale: string;
}
