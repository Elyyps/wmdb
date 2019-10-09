import React from "react";
import { shallow } from "enzyme";
import { FAQComponent } from "./faq.component";
import { generateFAQData } from "@app/api/modules/faq/end-point";

describe("[FAQ]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<FAQComponent faq={generateFAQData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
