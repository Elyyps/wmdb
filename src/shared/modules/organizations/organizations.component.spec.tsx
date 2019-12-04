import React from "react";
import { shallow } from "enzyme";
import { OrganizationsComponent } from "./organizations.component";
import { generateOrganizationsData } from "@app/api/modules/organizations/end-point";

describe("[Organizations]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(<OrganizationsComponent organisations={generateOrganizationsData()} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
