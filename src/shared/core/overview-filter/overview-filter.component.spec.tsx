import React from "react";
import { shallow } from "enzyme";
import { OverviewFilterComponent } from "./overview-filter.component";
import { dummyOverviewFilterData } from "@app/api/core/overview-filter";
import { getCardsPaginated } from "@app/api/modules/overview";
// tslint:disable
describe("[OverviewFilter]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <OverviewFilterComponent
        searchPlaceholder="Plaats, regio of provincie"
        range={0}
        onFilterChange={jest.fn()}
        {...dummyOverviewFilterData}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it("should return 200", () => {
    const cards200 = getCardsPaginated(0, 0, { filterText: "", range: 0, checkedItems: [], keyword: "" });
    expect(cards200.total).toBe(200);
  });
  it("should return 200", () => {
    const cards200 = getCardsPaginated(10, 0, { filterText: "", range: 0, checkedItems: [], keyword: "" });
    expect(cards200.total).toBe(200);
  });
  it("should return 0", () => {
    const cards200 = getCardsPaginated(200, 0, { filterText: "", range: 0, checkedItems: [], keyword: "" });
    expect(cards200.total).toBe(200);
  });
  it("should return 1", () => {
    const cards1 = getCardsPaginated(0, 0, { filterText: "", range: 0, checkedItems: [], keyword: "keyword" });
    expect(cards1.total).toBe(1);
  });
  it("should return 0", () => {
    const cards1 = getCardsPaginated(0, 0, {
      filterText: "",
      range: 0,
      checkedItems: [{ id: 1, label: "" }],
      keyword: "keyword"
    });
    expect(cards1.total).toBe(0);
  });
  it("should return 84", () => {
    const cards1 = getCardsPaginated(0, 0, {
      filterText: "",
      range: 0,
      checkedItems: [{ isChecked: true, id: 1, label: "" }, { isChecked: true, id: 2, label: "" }],
      keyword: ""
    });
    expect(cards1.total).toBe(84);
  });
  it("should return 129", () => {
    const cards1 = getCardsPaginated(0, 0, {
      filterText: "",
      range: 0,
      checkedItems: [
        { isChecked: true, id: 1, label: "" },
        { isChecked: true, id: 2, label: "" },
        { isChecked: true, id: 3, label: "" },
        { isChecked: true, id: 4, label: "" }
      ],
      keyword: ""
    });
    expect(cards1.total).toBe(129);
  });
});
