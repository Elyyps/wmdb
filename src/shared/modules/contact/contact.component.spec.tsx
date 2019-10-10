import React from "react";
import { shallow } from "enzyme";
import { ContactComponent } from "./contact.component";

describe("[Contact]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<ContactComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
