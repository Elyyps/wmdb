import * as React from "react";
import styles from "./other-activities-component.module.scss";
import { EventCardComponent } from "@app/core/event-card";

import { IOtherActivitiesModule } from "@app/api/modules/other-activities/other-activities";
import { IEventCard } from "@app/api/core/event-card";
import { Button } from "@app/core/button";

export interface IOtherActivitiesComponentProps {
  otherActivitiesModule: IOtherActivitiesModule;
}

const OtherActivitiesComponent = ({ otherActivitiesModule }: IOtherActivitiesComponentProps) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [internalArray, setInternalArray] = React.useState<IEventCard[]>([]);
  const sliceCardsByState = (isComponentOpened: boolean) => {
    if (isComponentOpened) {
      setInternalArray(otherActivitiesModule.cards);
    } else {
      setInternalArray(otherActivitiesModule.cards.slice(0, otherActivitiesModule.numberItemsShowing));
    }
  };
  const toggleOpened = () => {
    sliceCardsByState(!isOpened);
    setIsOpened(!isOpened);
  };
  React.useEffect(() => {
    sliceCardsByState(isOpened);
  }, [otherActivitiesModule]);

  return (
    <div className={styles["other-activities"]}>
      <h2>{otherActivitiesModule.title}</h2>
      <div className="uk-grid uk-child-width-1-2@s">
        {internalArray.map((item: IEventCard, key: number) => (
          <div key={key}>
            <EventCardComponent image={item.image} link={item.buttonText} title={item.title} />
          </div>
        ))}
      </div>
      <div className={styles["other-activities-action"]}>
        <Button
          fullWidth
          onClick={toggleOpened}
          title={isOpened ? otherActivitiesModule.buttonTitleOpened : otherActivitiesModule.buttonTitleClosed}
        />
      </div>
    </div>
  );
};

export { OtherActivitiesComponent };
