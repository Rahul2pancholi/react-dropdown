import React, { Component } from "react";
import "./style.css";
import ArrowDown from "../../asset/icon/keyboard_arrow_down.svg";
import { IState } from "./types";
import DropDownItem from "./viewes/DropDownItem";

const initialState: IState = {
  placeholder: "Colors",
  dropdownVisiblity: false,
  searchQuery: "",
  selectedItems: [],
  dropDownInputValue: "",
  filterItems: [],
  actualItems: [],
};

export default class DropDown extends Component<any, IState> {
  chekedObject: any;
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  _handelDropDownvisiblity = (e: any) => {
    const { dropdownVisiblity } = this.state;
    this.setState({ dropdownVisiblity: !dropdownVisiblity });
  };
  _handelSelectAllInput = (e: any) => {
    const { filterItems, selectedItems } = this.state;
    if (e.target.checked) {
      this.setState({ selectedItems: [...filterItems] });
      return;
    }
    selectedItems.length = 0;
    this.setState({ selectedItems });
  };

  componentDidMount() {
    const { data } = this.props;
    if (!data) {
      return;
    }
    this.setState({ filterItems: data, actualItems: data });
  }

  _handelOnSearchInput = (e: any) => {
    const { value } = e.target;
    const { filterItems, actualItems, searchQuery } = this.state;
    let filter: any = actualItems.filter((data, index) => {
      if (data.match(new RegExp(value, "i"))) {
        return true;
      }
    });

    this.setState({ searchQuery: value, filterItems: filter });
  };
  _renderDropDownVisiblity = () => {
    const { searchable, data } = this.props;
    const {
      dropdownVisiblity,
      searchQuery,
      selectedItems,
      filterItems,
    } = this.state;
    if (!dropdownVisiblity) {
      return null;
    }

    return (
      <div className="d-flex  col pos-absolute box-shadow mg-top-2">
        <div>
          {searchable ? (
            <div className="drop-down w-150" style={{ marginBottom: "3px" }}>
              <input
                value={searchQuery}
                className="h-40 input"
                onChange={this._handelOnSearchInput}
                placeholder="Search"
              />
            </div>
          ) : null}
        </div>

        <div className="overflow mx-h-100">
          <div style={{ marginRight: 20 }}>
            <input
              value={"All"}
              onChange={this._handelSelectAllInput}
              type="checkbox"
            />
          </div>

          {filterItems.map((value: string, index: number) => {
            return (
              <DropDownItem
                key={index}
                label={value}
                onChange={this._handelCheckedItems}
                checked={selectedItems.indexOf(value) === -1 ? false : true}
              />
            );

            return null;
          })}
        </div>
        <div
          style={{
            placeSelf: "flex-end",
            height: "60px",
            paddingRight: "10px",
          }}
          className="d-flex ai-center"
        >
          <div
            className="button"
            style={{ marginRight: "15px", fontWeight: "bold" }}
            onClick={this._handleClearButton}
          >
            Clear
          </div>
          <div
            className="button"
            style={{ marginLeft: "15px", color: "green", fontWeight: "bold" }}
            onClick={this._handleSubmitbutton}
          >
            Submit
          </div>
        </div>
      </div>
    );
  };

  _handleClearButton = () => {
    const { selectedItems } = this.state;
    selectedItems.length = 0;
    this.setState({ selectedItems });
    return;
  };

  _handleSubmitbutton = () => {
    const { selectedItems } = this.state;
    let value = selectedItems.join("-");
    this.setState({
      placeholder: value ? "Colors - " + value : "Colors",
      dropdownVisiblity: false,
    });
  };

  _handelCheckedItems = (e: any) => {
    let { selectedItems } = this.state;
    const { multiSelect = true } = this.props;

    console.log("_handelCheckedItems");
    if (e.target.checked) {
      selectedItems = multiSelect
        ? [...selectedItems, e.target.value]
        : [e.target.value];
      this.setState({ selectedItems });
      return;
    }
    selectedItems.splice(selectedItems.indexOf(e.target.value), 1);
    this.setState({ selectedItems });
  };

  render() {
    const { placeholder, searchQuery } = this.state;
    return (
      <div className="d-inline-block  border dropdown d-flex row">
        <div
          className="d-flex h-40 w-150 jc-space-between"
          onClick={this._handelDropDownvisiblity}
        >
          <label
            className="header"
            style={{ alignItems: "center", alignSelf: "center" }}
          >
            {placeholder}
          </label>
          <img
            style={{ alignItems: "center" }}
            src={ArrowDown}
            alt="arrow down"
          />
        </div>

        {this._renderDropDownVisiblity()}
      </div>
    );
  }
}
