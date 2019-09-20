import React from "react";
import { shallow } from "enzyme";
import { PlaygroundAhmedComponent } from "./playground-ahmed.component";

describe("[PlaygroundAhmedComponent]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(<PlaygroundAhmedComponent />);

    expect(renderedComponent).toMatchSnapshot();
  });
});
