import * as React from "react";
import styles from "./contact-component.module.scss";
import classNames from "classnames";
import { IconComponent } from "@app/core/icon";
import PATTERN from "@assets/pattern/pattern-wmdb.png";
import Arrow from "@assets/icons/chevron-right.svg";
import { BodyTextComponent } from "@app/core/bodytext";
import { ContactFormComponent } from "@app/core/contact-form";
import { OtherActivitiesComponent } from "../other-activities";
import { generateOtherActivitiesData } from "@app/api/modules/other-activities/end-points";
import { ContactModalComponent } from "./contact-modal.component";
import { ContactTelephoneComponent } from "./contact-telephone.component";
import { ContactDataComponent } from "./contact-data.component";
import RECTANGLE from "@assets/rectangle.png";
import { AdBannerComponent } from "@app/core/ad-banner";
import { Button } from "@app/core/button";
import { LinkComponent } from "@app/core/link";
import MAIL from "@assets/icons/mail.svg";
import { IContact } from "@app/api/modules/contact/contact";

export interface IContactComponentProps {
  contactModule: IContact;
}

const ContactComponent = ({ contactModule }: IContactComponentProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isData, setIsData] = React.useState(false);
  const [fullHeight, setFullHeight] = React.useState(false);
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
    <div className={styles["contact-body"]} style={{ backgroundImage: `url(${PATTERN})` }}>
      <div className="uk-container">
        <div className={styles["contact-grid"]}>
          <div className={classNames(styles["contact-main"], { [styles["fullheight"]]: fullHeight })}>
            <div className={styles["contact-title"]}>
              <h2>{contactModule.title}</h2>
            </div>
            <ul className={styles["contact-list"]}>
              <li>{contactModule.category}</li>
              <li>
                <IconComponent icon={contactModule.personsNumberIcon} size={"14px"} />
                {contactModule.personsNumber}
              </li>
            </ul>
            <div className={styles["contact-content"]}>
              <BodyTextComponent html={contactModule.content} style={{ color: "black" }} />
            </div>
            <Button title={contactModule.buttonText} variant={"primary"} fullWidth large onClick={toggleForm} />
            <div className={styles["other-activities"]}>
              <OtherActivitiesComponent otherActivitiesModule={generateOtherActivitiesData()} />
            </div>
            <div className={styles["contact-bottom"]}>
              <ContactTelephoneComponent
                title={"Telefonisch contact"}
                content={"Ook al zijn wij vaak op pad met een groep, wij doen altijd ons best u te woord te staan."}
                button={{ title: "Toon telefoonnummer", url: "" }}
                phone={"+31 020 6154 183"}
                contactName="Roel van den Berg"
              />
            </div>
          </div>
          <div className={styles["contact-aside"]}>
            <div className="uk-visible@m">
              <h2>{contactModule.formTitle}</h2>
              <p>{contactModule.formContent}</p>
              {!isActive && (
                <div className={styles["contact-actions"]}>
                  <Button
                    title={contactModule.buttonText}
                    variant={"primary"}
                    fullWidth
                    large
                    onClick={toggleForm}
                    type={"button"}
                  />
                  <div className={styles["contact-actions-mail"]}>
                    <LinkComponent to="">
                      <IconComponent icon={MAIL} size="15px" fillColor="black" />
                      <span className={styles["contact-actions-mail-span"]}>Deel via mail</span>
                    </LinkComponent>
                  </div>
                </div>
              )}
            </div>
            {isActive && (
              <ContactModalComponent title={"Informatie aanvraag"} onClick={toggleForm}>
                <ContactFormComponent onSubmit={() => alert("submitted")} />
              </ContactModalComponent>
            )}
            <div className="uk-visible@m">
              <AdBannerComponent
                content={"Surfen? Dat doe je in Zeeland."}
                backgroundImage={RECTANGLE}
                button={{ title: "Meer info", url: "/" }}
                advertisement={"Advertentie"}
              />
            </div>
          </div>
          <div className={styles["contact-mobile-actions"]}>
            <div className={styles["contact-mobile-head"]}>
              <Button
                icon={Arrow}
                title={fullHeight ? " Lees meer " : "Read more"}
                position={"left"}
                onClick={toggleMainContent}
              />
            </div>
            {!fullHeight && (
              <div className={styles["contact-mobile-actions-contact"]}>
                <ContactTelephoneComponent
                  title={"Telefonisch contact"}
                  content={"Ook al zijn wij vaak op pad met een groep, wij doen altijd ons best u te woord te staan."}
                  button={{ title: "Toon telefoonnummer", url: "#" }}
                  phone={"+31 020 6154 183"}
                  contactName="Roel van den Berg"
                />
              </div>
            )}
            <div className={styles["contact-mobile-bottom"]}>
              <div className={styles["contact-mobile-item"]}>
                <Button title={"Aanvragen"} variant={"primary"} fullWidth onClick={toggleForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isData && (
        <ContactModalComponent title={"Gegevens"} onClick={toggleData}>
          <ContactDataComponent
            phoneButton={{ title: "Toon telefoonnummer", url: "" }}
            content={
              "Wij zouden het op prijs stellen dat wanneer u via ons contact zoekt of belt, u WegmetdeBaas vermeldt!"
            }
            phone={{ title: "024 1234 5678", url: "tel:024 1234 5678" }}
            contactName={"Marie Autenbach"}
            priceButton={{ title: "Prijsindicatie aanvragen", url: "" }}
            onClick={toggleForm}
          />
        </ContactModalComponent>
      )}
    </div>
  );
};

export { ContactComponent };
