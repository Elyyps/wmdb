import React from "react";
import { shallow } from "enzyme";
import { ArrowPanel } from "./arrow-panel.component";

describe("[ArrowPanel]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ArrowPanel url="/" title="Title" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
