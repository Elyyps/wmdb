import React, { useState } from "react";
import styles from "./single-wmdb-component.module.scss";
import { FooterComponent, NavBarComponent, HeaderGalleryComponent } from "@app/prep/modules-prep";
import {
  SingleWmdbForm,
  SingleWmdbContent,
  SingleWmdbModal,
  SingleWmdbContact
} from "@app/prep/pages-prep/single-wmdb/components";
import { Breadcrumbs, Button, Advertise, IconComponent, CardEventContainer } from "@app/prep/modules-prep/core";
import { BreadcrumbsData } from "@app/prep/pages-prep/single-wmdb/dummy-data";
import LOCATION from "@assets/icons/location.svg";
import PATTERNT from "@assets/pattern/pattern-wmdb.png";
import Arrow from "@assets/icons/chevron-right.svg";
import ArrowLeft from "@assets/icons/chevron-left.svg";
import ROOMS from "@assets/icons/rooms.svg";
import Image from "@assets/img-big.jpg";
import classNames from "classnames";
import { SingleWmdbData } from "@app/prep/pages-prep/single-wmdb/components/single-wmdb-data";
import { Link } from "react-router-dom";

export interface ISingleWmdbComponentProps {}

const SingleWmdbComponent = (props: ISingleWmdbComponentProps) => {
  const count = 6;
  const [isActive, setIsActive] = useState(false);
  const [isData, setIsData] = useState(false);
  const [fullHeight, setFullHeight] = useState(false);
  const [countPosts] = useState(count);
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
      <div className="uk-container">
        <div className="uk-hidden@m">
          <Link to={"#"} className={styles["single-wmdb-back"]}>
            <IconComponent stroke icon={ArrowLeft} size={"12px"} />
            Terug
          </Link>
        </div>
      </div>
      <HeaderGalleryComponent />
      <div className={styles["single-wmdb-body"]} style={{ backgroundImage: `url(${PATTERNT})` }}>
        <div className="uk-container">
          <div className={styles["single-wmdb-grid"]}>
            <div className={classNames(styles["single-wmdb-main"], { [styles["fullheight"]]: fullHeight })}>
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
              <SingleWmdbContent />
              <CardEventContainer
                title={"Andere activiteiten van dit bedrijf"}
                button={{
                  title: `Bekijk ${countPosts} meer activiteiten`,
                  variant: "default full"
                }}
                cards={[
                  {
                    image: Image,
                    title: "U Deugt Wij Deugen",
                    link: "#"
                  },
                  {
                    image: Image,
                    title: "The Ultimate Expedition",
                    link: "#"
                  },
                  {
                    image: Image,
                    title: "Het Mislukte Feest",
                    link: "#"
                  },
                  {
                    image: Image,
                    title: "Hou van Holland Stadsspel",
                    link: "#"
                  }
                ]}
              />
              <div className={styles["single-wmdb-bottom"]}>
                <SingleWmdbContact />
              </div>
            </div>
            <div className={styles["single-wmdb-aside"]}>
              <div className="uk-visible@m">
                <h2>Vrijblijvende offerte / prijsindicatie</h2>
                <p>Vraag vrijblijvend een prijsindicatie aan en ontvang informatie op maat!</p>
                {!isActive ? (
                  <div className={styles["single-wmdb-actions"]}>
                    <Button
                      title={"Ontvang informatie / offerte"}
                      variant={"primary full large"}
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
              {isActive ? (
                <SingleWmdbModal title={"Informatie aanvraag"} onClick={toggleForm}>
                  <SingleWmdbForm />
                </SingleWmdbModal>
              ) : (
                ""
              )}
              <div className="uk-visible@m">
                <Advertise />
              </div>
            </div>
            <div className={styles["single-wmdb-mobile-actions"]}>
              <div className={styles["single-wmdb-mobile-head"]}>
                <Button
                  icon={Arrow}
                  title={fullHeight ? " Lees meer " : "Read more"}
                  position={"left"}
                  onClick={toggleMainContent}
                />
              </div>
              {!fullHeight ? (
                <div className={styles["single-wmdb-mobile-actions-contact"]}>
                  <SingleWmdbContact />
                </div>
              ) : (
                ""
              )}
              <div className={styles["single-wmdb-mobile-bottom"]}>
                <div className={styles["single-wmdb-mobile-item"]}>
                  <Button title={"Aanvragen"} variant={"primary"} onClick={toggleForm} />
                </div>
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
