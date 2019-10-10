import React from "react";
import { shallow } from "enzyme";
import { Dropdown } from "./dropdown.component";

describe("[Dropdown]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<Dropdown />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
