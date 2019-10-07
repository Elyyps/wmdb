export interface ICheckbox {
  count?: number;
  isChecked?: boolean;
  label: string;
  name: string;
}

export interface ICheckboxUnique extends ICheckbox{
  id: number;
}
