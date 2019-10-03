import React from "react";
import { shallow } from "enzyme";
import { CompanyOutingComponent } from "./company-outing.component";
import { generateCompanyOutingData } from "@app/api/modules/company-outing/end-point";

describe("[CompanyOuting]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<CompanyOutingComponent companyOuting={generateCompanyOutingData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
