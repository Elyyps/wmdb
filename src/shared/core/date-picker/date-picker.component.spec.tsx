import React from "react";
import { shallow } from "enzyme";
import { DatePickerComponent } from "./date-picker.component";

describe("[DatePicker]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<DatePickerComponent onBlur={() => ""} onChange={() => ""} id={""} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
