interface IAction {
  type?: string;
}

export interface IMobileSetting extends IAction {
  isMobile: boolean;
}
