import React from "react";
import { PlaygroundContainerProps } from "@app/modules/playground";

import style from "./playground-component.module.scss";
import { ArrowPanel } from "@app/core/arrow-panel/arrow-panel.component";
import { ArrowPanelListComponent } from "@app/core/arrow-panel-list";
import ETEN from "@assets/icons/eten.svg";

export interface IPlaygroundComponentProps {}

const PlaygroundComponent = (props: IPlaygroundComponentProps & PlaygroundContainerProps) => (
  <div>
    <div style={{ backgroundColor: "#e8f2fc" }} className={style["main"]}>
      Playground!!
      <div>
        <ArrowPanelListComponent
          title="Arrow Panel List title"
          items={[
            {
              icon: ETEN,
              title: "Spel & Ontspanning",
              items: [
                {
                  title: "Wat is Lorem Ipsum?",
                  link: "/"
                },
                {
                  title: "Hoe lang zijn mijn aanbiedingen of vacatures zichtbaar op indebuurt?",
                  link: "/"
                },
                {
                  title: "Hoe kan ik mijn (wekelijkse) aanbieding of vacature aanleveren?",
                  link: "/"
                },
                {
                  title: "Hoe lang staat mijn artikel op de homepagina, waar komt het vandaan?",
                  link: "/"
                },
                {
                  title: "Waar kan ik het vinden?",
                  link: "/"
                },
                {
                  title: "Waar kan ik het vinden?",
                  link: "/"
                }
              ],
              linkMore: {
                title: "Alle veelgestelde vragen over musea",
                link: "/"
              }
            }
          ]}
        />
      </div>
    </div>
  </div>
);

export { PlaygroundComponent };
