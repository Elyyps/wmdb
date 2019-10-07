import React from "react";
import { shallow } from "enzyme";
import { Pagination } from "./pagination";

describe("[InfoHeaderComponent]", () => {
  it("should render with no pages without crashing", () => {
    const renderedComponent = shallow(<Pagination currentPage={0} totalItems={1} />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it("should render with currentPage bigger than totalItems without crashing", () => {
    const renderedComponent = shallow(<Pagination currentPage={5} totalItems={1} />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it("should render without crashing", () => {
    const renderedComponent = shallow(<Pagination currentPage={1} totalItems={23} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
