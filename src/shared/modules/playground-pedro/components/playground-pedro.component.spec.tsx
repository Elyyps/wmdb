import React from "react";
import { shallow } from "enzyme";
import { PlaygroundPedroComponent } from "./playground-pedro.component";

describe("[PlaygroundPedroComponent]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(<PlaygroundPedroComponent />);

    expect(renderedComponent).toMatchSnapshot();
  });
});
