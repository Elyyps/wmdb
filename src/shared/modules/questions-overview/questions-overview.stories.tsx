import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withProvider } from "@app/util";
import { QuestionsOverviewComponent } from "./questions-overview.component";
import { generateQuestionsOverviewData } from "@app/api/modules/questions-overview/end-point";

storiesOf("QuestionsOverview", module)
  .addDecorator(withA11y)
  .addDecorator(withProvider)
  .add("Basic implementation", () => <QuestionsOverviewComponent questionOverview={generateQuestionsOverviewData()} />);
