import React from "react";
import { shallow } from "enzyme";
import { Checkbox } from "../checkbox.component";

describe("[Checkbox]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(<Checkbox label="Label" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
