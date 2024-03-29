import React from "react";
import { shallow } from "enzyme";

import { PlaygroundComponent } from "@app/modules/playground";

describe("[PlaygroundComponent]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(<PlaygroundComponent />);

    expect(renderedComponent).toMatchSnapshot();
  });
});
