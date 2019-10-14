import React from "react";
import { shallow } from "enzyme";
import { Breadcrumb } from "@app/core/breadcrumb";

describe("[Button]", () => {
  it("should render without crashing", () => {
    const renderedComponent = shallow(
      <Breadcrumb
        breadcrumbs={[
          { title: "Home", url: "/" },
          { title: "Another page", url: "/" },
          { title: "Current page", url: "" }
        ]}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
  it("should render without crashing", () => {
    const renderedComponent = shallow(<Breadcrumb breadcrumbs={[]} />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it("should render without crashing", () => {
    const renderedComponent = shallow(<Breadcrumb breadcrumbs={[{ title: "Home", url: "/" }]} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
