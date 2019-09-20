import React from "react";
import { shallow } from "enzyme";
import { Checkbox } from "./checkbox.component";

describe("[Label]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<Checkbox label="Label" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
