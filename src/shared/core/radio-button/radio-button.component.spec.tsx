import React from "react";
import { shallow } from "enzyme";
import { RadioButtonComponent } from "./radio-button.component";

describe("[RadioButton]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<RadioButtonComponent id={"2"} name={"name"} value={"value"} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
