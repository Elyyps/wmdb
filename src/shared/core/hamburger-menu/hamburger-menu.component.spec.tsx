import React from "react";
import { shallow } from "enzyme";
import { HamburgerMenuComponent } from "./hamburger-menu.component";

describe("[HamburgerMenu]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<HamburgerMenuComponent menuItems={[]} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
