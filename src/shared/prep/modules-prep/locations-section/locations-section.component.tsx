import * as React from "react";
import { Link } from "react-router-dom";
import "./locations-section.component.scss";
import { Section } from "@app/prep/modules-prep/core";

export interface ILocationsSectionComponentProps {
  backgroundColor?: string;
  locations?: any[];
  paddingBottom?: string;
  paddingTop?: string;
  pattern?: boolean;
  title?: string;
}

const LocationsSectionComponent = (props: ILocationsSectionComponentProps) => {
  const { backgroundColor, paddingBottom, paddingTop, title, locations, pattern } = props;

  return (
    <Section
      title={title}
      backgroundColor={backgroundColor}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      pattern={pattern}
    >
      {locations &&
        locations.map((item, key) => (
          <div className="locations" key={key}>
            <h5>{item.title}</h5>
            {item.items && (
              <ul className="locations__list">
                {item.items.map((link: any, i: number) => (
                  <li key={i}>
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </Section>
  );
};

export { LocationsSectionComponent };
