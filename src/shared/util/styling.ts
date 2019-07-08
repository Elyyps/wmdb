export interface IStyles {
  [key: string]: string;
}

export class StylingOverrideUtil {
  private propsStyle: IStyles | undefined;

  public constructor(propsStyle: IStyles | undefined) {
    this.propsStyle = propsStyle;
  }

  public getStyle(moduleStyle: IStyles, name: string): string {
    if (!this.propsStyle) {
      return moduleStyle[name];
    }

    return [this.propsStyle[name], moduleStyle[name]].join(" ");
  }
}
