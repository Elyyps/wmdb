import React from "react";
import { shallow } from "enzyme";
import { TextAreaComponent } from "./text-area.component";

describe("[TextArea]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<TextAreaComponent name={"name"} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
