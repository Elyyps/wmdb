import React from "react";
import { shallow } from "enzyme";
import { OverviewFilterComponent } from "./overview-filter.component";
import { dummyOverviewFilterData } from "@app/api/core/overview-filter";

describe("[OverviewFilter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <OverviewFilterComponent
        searchPlaceholder="Plaats, regio of provincie"
        rangeOnChange={jest.fn()}
        range={0}
        checkboxOnChange={jest.fn()}
        stateCheckboxes={[]}
        {...dummyOverviewFilterData}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
