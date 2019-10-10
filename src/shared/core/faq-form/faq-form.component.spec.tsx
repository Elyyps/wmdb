import React from "react";
import { shallow } from "enzyme";
import { FAQFormComponent } from "./faq-form.component";

describe("[FAQForm]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FAQFormComponent onSubmit={() => ""} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
