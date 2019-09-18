import React from "react";
import { shallow } from "enzyme";
import { Input } from "../input.component";
import { RadioButton } from "../radio-button.component";

describe("[Radio Button]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(<RadioButton id="1" name="name" label="Label" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
