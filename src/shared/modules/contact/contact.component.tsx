import * as React from "react";
import styles from "./contact-component.module.scss";
import classNames from "classnames";
import { IconComponent } from "@app/core/icon";
import ROOMS from "@assets/icons/rooms.svg";
import LOCATION from "@assets/icons/location.svg";
import PATTERNT from "@assets/pattern/pattern-wmdb.png";
import Arrow from "@assets/icons/chevron-right.svg";
import ArrowLeft from "@assets/icons/chevron-left.svg";
import { BodyTextComponent } from "@app/core/bodytext";
import { generateContactData } from "@app/api/modules/contact/end-point";
import { Button } from "@app/core/button";
import { ContactFormComponent } from "@app/core/contact-form";
export interface IContactComponentProps {}

const ContactComponent = (props: IContactComponentProps) => (
  // <div className={styles["contact"]}>
  <div className={styles["single-wmdb-body"]} style={{ backgroundImage: `url(${PATTERNT})` }}>
    <div className="uk-container">
      <div className={styles["single-wmdb-grid"]}>
        <div className={classNames(styles["single-wmdb-main"])}>
          <div className={styles["single-wmdb-title"]}>
            <h2>Wie is de mol?</h2>
          </div>
          <ul className={styles["single-wmdb-list"]}>
            <li>BE Eventgroup</li>
            <li>
              <IconComponent icon={ROOMS} size={"14px"} />
              10 - 1000 personen
            </li>
          </ul>
          <BodyTextComponent html={generateContactData().content} />

          {/* <SingleWmdbContent /> */}
          {/*   ajoutez les 4 cartes */}
          <div className={styles["single-wmdb-bottom"]}>
            <ContactFormComponent onSubmit={() => ""} />
          </div>
        </div>
        <div className={styles["single-wmdb-aside"]}>
          <div className="uk-visible@m">
            <h2>Vrijblijvende offerte / prijsindicatie</h2>
            <p>Vraag vrijblijvend een prijsindicatie aan en ontvang informatie op maat!</p>
            {true ? (
              <div className={styles["single-wmdb-actions"]}>
                <Button
                  title={"Ontvang informatie / offerte"}
                  variant={"primary full large"}
                  icon={LOCATION}
                  position={"left"}
                  onClick={() => ""}
                  type={"button"}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {true ? (
            // <SingleWmdbModal title={"Informatie aanvraag"} onClick={toggleForm}>
            <ContactFormComponent onSubmit={() => ""} />
          ) : (
            // </SingleWmdbModal>
            ""
          )}
          <div className="uk-visible@m">{/* <Advertise /> */}</div>
        </div>
        <div className={styles["single-wmdb-mobile-actions"]}>
          <div className={styles["single-wmdb-mobile-head"]}>
            <Button icon={Arrow} title={" Lees meer "} position={"left"} onClick={() => ""} />
          </div>
          {false ? (
            <div className={styles["single-wmdb-mobile-actions-contact"]}>
              <ContactFormComponent onSubmit={() => ""} />
            </div>
          ) : (
            ""
          )}
          <div className={styles["single-wmdb-mobile-bottom"]}>
            <div className={styles["single-wmdb-mobile-item"]}>
              <Button title={"Aanvragen"} variant={"primary"} onClick={() => ""} />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* {isData ? (
      <SingleWmdbModal title={"Gegevens"} onClick={()=>""}>
        <SingleWmdbData onClick={toggleForm} />
      </SingleWmdbModal>
    ) : (
      ""
    )} */}
  </div>
);

export { ContactComponent };
