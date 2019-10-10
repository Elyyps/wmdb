import React from "react";
import { shallow } from "enzyme";
import { Button } from "./button.component";
import Arrow from "@assets/icons/chevron-down.svg";

describe("[Button]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(<Button title="Primary" />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it("should render without crashing", () => {
    const renderedComponent = shallow(<Button variant="secondary" title="Secondary" />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it("should render without crashing", () => {
    const renderedComponent = shallow(<Button icon={Arrow} title="Primary" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
