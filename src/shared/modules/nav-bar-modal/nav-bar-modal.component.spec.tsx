import React from "react";
import { shallow } from "enzyme";
import { NavBarModalComponent } from "./nav-bar-modal.component";

describe("[NavBarModal]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<NavBarModalComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
