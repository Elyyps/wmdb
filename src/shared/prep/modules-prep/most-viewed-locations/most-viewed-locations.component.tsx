import * as React from "react";
import "./most-viewed-locations.component.scss";
import { Section, SimpleCard } from "@app/prep/modules-prep/core";

export interface IMostViewedLocationsComponentProps {
  backgroundColor?: string;
  locations?: any[];
  paddingBottom?: string;
  paddingTop?: string;
  pattern?: boolean;
  title?: string;
}

const MostViewedLocationsComponent = (props: IMostViewedLocationsComponentProps) => {
  const { backgroundColor, paddingBottom, paddingTop, title, locations, pattern } = props;

  return (
    <Section
      title={title}
      backgroundColor={backgroundColor}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      pattern={pattern}
    >
      {locations && (
        <div className="most-viewed-locations">
          {locations.map((item, key) => (
            <div className="most-viewed-locations__item" key={key}>
              <SimpleCard {...item} />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export { MostViewedLocationsComponent };
