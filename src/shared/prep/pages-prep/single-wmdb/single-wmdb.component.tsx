import React, { useState } from "react";
import styles from "./single-wmdb-component.module.scss";
import { FooterComponent, NavBarComponent, HeaderGalleryComponent } from "@app/prep/modules-prep";
import { SingleWmdbForm, SingleWmdbContent, SingleWmdbModal } from "@app/prep/pages-prep/single-wmdb/components";
import { Breadcrumbs, Button, ListCheckComponent, Advertise } from "@app/prep/modules-prep/core";
import { BreadcrumbsData } from "@app/prep/pages-prep/single-wmdb/dummy-data";
import LOCATION from "@assets/icons/location.svg";
import PATTERNT from "@assets/pattern/pattern-wmdb.png";
import Arrow from "@assets/icons/chevron-right.svg";
import classNames from "classnames";
import { SingleWmdbData } from "@app/prep/pages-prep/single-wmdb/components/single-wmdb-data";

export interface ISingleWmdbComponentProps {}

const SingleWmdbComponent = (props: ISingleWmdbComponentProps) => {
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
    <div className={styles["single-wmdb"]}>
      <NavBarComponent />
      <div className="uk-visible@m">
        <Breadcrumbs breadcrumbs={BreadcrumbsData} />
      </div>
      <HeaderGalleryComponent />
      <div className={styles["single-wmdb-body"]} style={{ backgroundImage: `url(${PATTERNT})` }}>
        <div className="uk-container">
          <div className={styles["single-wmdb-grid"]}>
            <div className={classNames(styles["single-wmdb-main"], { [styles["fullheight"]]: fullHeight })}>
              <div className={styles["single-wmdb-title"]}>
                <h2>Julianatoren</h2>
              </div>
              <ul className={styles["single-wmdb-list"]}>
                <li>Apeldoorn</li>
                <li>10 - 1000 personen</li>
                <li>Schoolreisjes</li>
                <li>Alleen buiten</li>
              </ul>
              <SingleWmdbContent />
            </div>
            <div className={styles["single-wmdb-aside"]}>
              <div className="uk-visible@m">
                <h2>Vrijblijvende offerte / prijsindicatie</h2>
                <p>Vraag vrijblijvend een prijsindicatie aan en ontvang een antwoord binnen 12 uur!</p>
                <div className={styles["single-wmdb-actions"]}>
                  {!isActive ? (
                    <Button
                      title={"Ontvang informatie / offerte"}
                      variant={"primary full large"}
                      icon={LOCATION}
                      position={"left"}
                      onClick={toggleForm}
                      type={"button"}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {isActive ? (
                <SingleWmdbModal title={"Informatie aanvraag"} onClick={toggleForm}>
                  <SingleWmdbForm />
                </SingleWmdbModal>
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
            <div className={styles["single-wmdb-mobile-actions"]}>
              <div className={styles["single-wmdb-mobile-head"]}>
                <div className={styles["single-wmdb-mobile-item"]}>
                  <Button title={"Gegevens"} icon={LOCATION} position={"left"} onClick={toggleData} />
                </div>
                <div className={styles["single-wmdb-mobile-item"]}>
                  <Button
                    title={"Offerte"}
                    icon={LOCATION}
                    position={"left"}
                    variant={"primary"}
                    onClick={toggleForm}
                  />
                </div>
              </div>
              <div className={styles["single-wmdb-mobile-bottom"]}>
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
          <SingleWmdbModal title={"Gegevens"} onClick={toggleData}>
            <SingleWmdbData onClick={toggleForm} />
          </SingleWmdbModal>
        ) : (
          ""
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export { SingleWmdbComponent };
