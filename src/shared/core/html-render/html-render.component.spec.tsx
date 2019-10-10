import React from "react";
import { shallow } from "enzyme";
import { HtmlRenderComponent } from "./html-render.component";

describe("[HtmlRender]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<HtmlRenderComponent html="<h1>HTML rendered</h1><br/>From a string/>" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
