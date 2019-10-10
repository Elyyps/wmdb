import React from "react";
import { shallow } from "enzyme";
import { NavBarComponent } from "./nav-bar.component";
import { generateNavbarData } from "@app/api/modules/nav-bar/end-point";

describe("[NavBar]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<NavBarComponent navbarModule={generateNavbarData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
