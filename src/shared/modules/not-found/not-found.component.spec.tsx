import React from "react";
import { shallow } from "enzyme";
import { NotFoundComponent } from "./not-found.component";

describe("[NotFound]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<NotFoundComponent />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
