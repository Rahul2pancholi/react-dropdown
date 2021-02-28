export interface IState {
  placeholder: string;
  dropdownVisiblity: boolean;
  searchQuery: string;
  selectedItems: Array<string>;
  dropDownInputValue: string;
  filterItems: Array<string>;
  actualItems: Array<string>;
}

export interface IProps {
  searchable: boolean;
  multiSelect: boolean;
}
