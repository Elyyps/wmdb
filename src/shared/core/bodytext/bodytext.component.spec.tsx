import React from "react";
import { shallow } from "enzyme";
import { BodyTextComponent } from "./bodytext.component";

describe("[BodyText]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <BodyTextComponent containerAlignment="center" containerSize="full" html="<h1>Plein HTML here</h1>" />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
