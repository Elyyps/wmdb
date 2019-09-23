import * as React from "react";
import styles from "./arrow-panel-list-component.module.scss";
import { IconComponent } from "../icon";
import { ArrowPanel } from "../arrow-panel/arrow-panel.component";
import { SeeMorePanel } from "../see-more-panel";


export interface IArrowPanelListComponentProps {
  backgroundColor?: string;
  icon?: string;
  items?: any[];
  paddingBottom?: string;
  paddingTop?: string;
  pattern?: boolean;
  title: string;
}

const ArrowPanelListComponent = (props: IArrowPanelListComponentProps) => {
  const { items } = props;

  return (
    <div className={styles["arrow-panel-list"]}>
      {items && (
        <div className="faq-overview__posts uk-grid uk-child-width-1-2@s">
          {items.map((row, key) => (
            <div key={key}>
              <div className="faq-overview__head">
                {row.icon && <IconComponent icon={row.icon} size="34px" />}

                <h3>{row.title}</h3>
              </div>
              {row.items.map((item: any, i: number) => (
                <div key={i} className="faq-overview__item">
                  <ArrowPanel {...item} />
                </div>
              ))}

              {row.linkMore && (
                <div className="faq-overview__item">
                  <SeeMorePanel {...row.linkMore} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export { ArrowPanelListComponent };
