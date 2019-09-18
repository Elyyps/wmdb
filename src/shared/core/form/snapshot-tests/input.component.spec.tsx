import React from "react";
import { shallow } from "enzyme";
import { Input } from "../input.component";

describe("[Input]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(<Input name="input-name" placeholder="Label" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
