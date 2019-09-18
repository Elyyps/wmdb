import React from "react";
import { shallow } from "enzyme";
import { NavBarComponent } from "./nav-bar.component";

describe("[NavBar]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<NavBarComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
