import React from "react";
import { shallow } from "enzyme";
import { QuestionsOverviewComponent } from "./questions-overview.component";
import { generateQuestionsOverviewData } from "@app/api/modules/questions-overview/end-point";

describe("[QuestionsOverview]", () => {
  it("should render component without crashing", () => {
    const renderedComponent = shallow(
      <QuestionsOverviewComponent questionOverview={generateQuestionsOverviewData()} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
