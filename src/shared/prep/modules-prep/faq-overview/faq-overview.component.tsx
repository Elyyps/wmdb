import * as React from "react";
import "./faq-overview.component.scss";
import { SimpleCard, Section, SeeMoreCard, IconComponent } from "@app/prep/modules-prep/core";

export interface IFAQOverviewComponentProps {
  backgroundColor?: string;
  icon?: string;
  items?: any[];
  paddingBottom?: string;
  paddingTop?: string;
  pattern?: boolean;
  title?: string;
}

const FAQOverviewComponent = (props: IFAQOverviewComponentProps) => {
  const { title, backgroundColor, paddingBottom, paddingTop, items, pattern } = props;

  const numberPosts = 5;

  return (
    <Section
      title={title}
      backgroundColor={backgroundColor}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      pattern={pattern}
    >
      {items && (
        <div className="faq-overview__posts uk-grid uk-child-width-1-2@s">
          {items.map((row, key) => (
            <div key={key}>
              <div className="faq-overview__head">
                {row.icon && <IconComponent icon={row.icon} size="34px" />}

                <h3>{row.title}</h3>
              </div>
              {row.items.slice(0, numberPosts).map((item: any, i: number) => (
                <div key={i} className="faq-overview__item">
                  <SimpleCard {...item} />
                </div>
              ))}

              {row.linkMore ? (
                <div className="faq-overview__item">
                  <SeeMoreCard {...row.linkMore} />
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export { FAQOverviewComponent };
