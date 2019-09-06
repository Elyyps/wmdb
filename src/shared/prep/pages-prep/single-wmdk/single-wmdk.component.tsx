import React, { useState } from "react";
import styles from "./single-wmdk-component.module.scss";
import { FooterComponent, NavBarComponent, HeaderGalleryComponent } from "@app/prep/modules-prep";
import { SingleWmdkForm, SingleWmdkContent, SingleWmdkModal } from "@app/prep/pages-prep/single-wmdk/components";
import { Breadcrumbs, Button, LabelComponent, ListCheckComponent, Advertise } from "@app/prep/modules-prep/core";
import { BreadcrumbsData } from "@app/prep/pages-prep/single-wmdk/dummy-data";
import LOCATION from "@assets/icons/location.svg";
import PATTERNT from "@assets/pattern/pattern-wmdk.png";
import Arrow from "@assets/icons/chevron-right.svg";
import classNames from "classnames";
import { SingleWmdkData } from "@app/prep/pages-prep/single-wmdk/components/single-wmdk-data";

export interface ISingleWmdkComponentProps {}

const SingleWmdkComponent = (props: ISingleWmdkComponentProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isData, setIsData] = useState(false);
  const [fullHeight, setFullHeight] = useState(false);

  const toggleForm = () => {
    setIsData(false);
    setIsActive(!isActive);
  };
  const toggleData = () => {
    setIsData(!isData);
  };
  const toggleMainContent = () => {
    setFullHeight(!fullHeight);
  };

  return (
    <div className={styles["single-wmdk"]}>
      <NavBarComponent />
      <div className="uk-visible@m">
        <Breadcrumbs breadcrumbs={BreadcrumbsData} />
      </div>
      <HeaderGalleryComponent />
      <div className={styles["single-wmdk-body"]} style={{ backgroundImage: `url(${PATTERNT})` }}>
        <div className="uk-container">
          <div className={styles["single-wmdk-grid"]}>
            <div className={classNames(styles["single-wmdk-main"], { [styles["fullheight"]]: fullHeight })}>
              <div className={styles["single-wmdk-main-head"]}>
                <LabelComponent>Tijdelijk 20% korting</LabelComponent>
              </div>
              <div className={styles["single-wmdk-title"]}>
                <h2>Julianatoren</h2>
              </div>
              <ul className={styles["single-wmdk-list"]}>
                <li>Apeldoorn</li>
                <li>10 - 1000 personen</li>
                <li>Schoolreisjes</li>
                <li>Alleen buiten</li>
              </ul>
              <SingleWmdkContent />
            </div>
            <div className={styles["single-wmdk-aside"]}>
              <div className="uk-visible@m">
                <h2>Vrijblijvende offerte / prijsindicatie</h2>
                <p>Vraag vrijblijvend een prijsindicatie aan en ontvang een antwoord binnen 12 uur!</p>
                <div className={styles["single-wmdk-actions"]}>
                  <div className={styles["single-wmdk-actions-item"]}>
                    <Button title={"Toon telefoonnummer"} href={"#"} icon={LOCATION} position={"left"} />
                  </div>
                  <div className={styles["single-wmdk-actions-item"]}>
                    <Button title={"Bezoek de website"} href={"#"} icon={LOCATION} position={"left"} />
                  </div>
                  <div className={styles["single-wmdk-actions-item"]}>
                    <Button title={"Deel via mail"} href={"#"} icon={LOCATION} position={"left"} />
                  </div>
                  {!isActive ? (
                    <div className={styles["single-wmdk-actions-item"]}>
                      <Button
                        title={"Prijsindicatie aanvragen"}
                        variant={"primary"}
                        icon={LOCATION}
                        position={"left"}
                        onClick={toggleForm}
                        type={"button"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {isActive ? (
                <SingleWmdkModal title={"Informatie aanvraag"} onClick={toggleForm}>
                  <SingleWmdkForm />
                </SingleWmdkModal>
              ) : (
                ""
              )}
              <div className="uk-visible@m">
                <ListCheckComponent
                  labels={[
                    "Antwoord binnen 12 uur!",
                    "Kwalitatief aanbod van uitjes",
                    "Direct contact",
                    "Unieke content van uitjes",
                    "De beste aanbiedingen en acties"
                  ]}
                />
              </div>
              <div className="uk-visible@m">
                <Advertise />
              </div>
            </div>
            <div className={styles["single-wmdk-mobile-actions"]}>
              <div className={styles["single-wmdk-mobile-head"]}>
                <div className={styles["single-wmdk-mobile-item"]}>
                  <Button title={"Gegevens"} icon={LOCATION} position={"left"} onClick={toggleData} />
                </div>
                <div className={styles["single-wmdk-mobile-item"]}>
                  <Button
                    title={"Offerte"}
                    icon={LOCATION}
                    position={"left"}
                    variant={"primary"}
                    onClick={toggleForm}
                  />
                </div>
              </div>
              <div className={styles["single-wmdk-mobile-bottom"]}>
                <Button
                  icon={Arrow}
                  title={fullHeight ? " Lees meer " : "Read more"}
                  position={"left"}
                  onClick={toggleMainContent}
                />
              </div>
            </div>
          </div>
        </div>
        {isData ? (
          <SingleWmdkModal title={"Gegevens"} onClick={toggleData}>
            <SingleWmdkData onClick={toggleForm} />
          </SingleWmdkModal>
        ) : (
          ""
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export { SingleWmdkComponent };
