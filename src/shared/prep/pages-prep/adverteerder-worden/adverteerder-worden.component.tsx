import * as React from "react";
import styles from "./adverteerder-worden-component.module.scss";
import { NavBarComponent, FooterComponent } from "@app/prep/modules-prep";
import {
  ImageComponent,
  CardAdvertise,
  Section,
  Button,
  RadioButton,
  Input,
  TextArea,
  Checkbox
} from "@app/prep/modules-prep/core";
import { HeaderInfoComponent } from "@app/prep/modules-prep/header-info";
import { Advertise } from "@app/prep/pages-prep/adverteerder-worden/dummy-data";
import Oasis from "@assets/oasis.jpg";
import PlaceholderImage from "@assets/img03.png";
import { ExpandBlock, ExpandButton } from "@app/prep/modules-prep/core/expand-block";

export interface IAdverteerderWordenComponentProps {}

const AdverteerderWordenComponent = (props: IAdverteerderWordenComponentProps) => {
  const [isOpen, setIsOpened] = React.useState(false);
  const toggleOpened = () => {
    setIsOpened(!isOpen);
  };

  return (
    <div className={styles["homepage"]}>
      <NavBarComponent />
      <HeaderInfoComponent
        title={"Adverteer ook op WegmetdeKids.nl!"}
        content={"Uw bedrijf maandelijks onder de aandacht bij 75.000 gezinnen!"}
        image={PlaceholderImage}
      />

      <Section paddingBottom={"72px"} paddingTop={"72px"}>
        <div className="uk-grid uk-child-width-1-2@s uk-grid-xlarge">
          <div>
            <h2>Waarom bij ons adverteren</h2>
            <p>
              Door Wegmetdekids.nl als marketingkanaal aan te spreken vergroot u de regio waarin uw klanten zich
              bevinden.
            </p>
            <ul className="uk-list-check">
              <li>Antwoord binnen 12 uur!</li>
              <li>Kwalitatief aanbod van uitjes</li>
              <li>Direct contact</li>
              <li>Unieke content van uitjes</li>
              <li>De beste aanbiedingen en acties</li>
            </ul>
            <ImageComponent src={Oasis} />
          </div>
          <div>
            <h2>Gratis proefperiode van 4 maanden</h2>
            <p>
              Maak gebruik van de gratis proefperiode van 4 maanden. Dit zonder kosten en verplichtingen, eerst zien,
              dan geloven!
            </p>
            <ExpandButton
              modify={"uk-hidden@m"}
              button={{ title: "Gebruik maken van proefperiode", variant: "primary full" }}
              isOpen={isOpen}
              onClick={() => {
                toggleOpened();
              }}
            />
            <ExpandBlock
              title={"Informatie aanvraag"}
              isOpen={isOpen}
              modify={"show-desktop"}
              onClick={() => {
                toggleOpened();
              }}
            >
              <form action="#">
                <div className="form__list">
                  <RadioButton isChecked id={"from-radio"} name={"radio"} value={"Dhr."} label={"Dhr."} />
                  <RadioButton id={"from-radio2"} name={"radio"} value={"Mevr."} label={"Mevr."} />
                </div>
                <Input label={"Naam"} name={"Naam"} />
                <Input label={"E-mailadres"} name={"e-mail"} />
                <Input label={"Telefoonnummer"} name={"phone"} />
                <Input label={"Bedrijfsnaam"} name={"bedrijfsnaam"} />
                <Input label={"Titel v/d advertentie"} name={"advertentie"} />
                <TextArea label={"Vraag of opmerking (optioneel)"} name={"textarea"} />
                <div className="form__item">
                  <Checkbox isChecked={true} name={"privacy"} label={"Aanmelden voor de WMDK nieuwsbrief"} />
                </div>
                <Button title={"Gebruik maken van de proefperiode"} variant={"primary full"} />
              </form>
            </ExpandBlock>
          </div>
        </div>
      </Section>

      <Section backgroundColor={"#fff8ed"} paddingBottom={"72px"} paddingTop={"72px"}>
        <div className="uk-grid uk-child-width-1-2@s uk-grid-xlarge">
          <div>
            <h2>Adverteer op onze actuele agenda!</h2>
            <p>
              De rubriek actuele agenda is ongekend populair, zeker in weekeinden en vakantietijd. De actuele agenda
              geeft een overzicht van actuele unieke kinderactiviteiten per stad. Het aantal bezoekers is dan soms
              groter dan 8.000 bezoekers per dag. Let wel, dit zijn zeer gerichte bezoekers die op dat moment suprême
              echt op zoek zijn naar een evenement om te doen en te beleven.{" "}
            </p>
            <CardAdvertise {...Advertise} />
          </div>
          <div>
            <h2>Maak gebruik van ons platform en bezoekers!</h2>
            <p>
              Middels onderstaand formulier kunt u uw activiteit of evenement invoeren en plaatsen voor slechts €35,-
              exclusief btw (maximaal 1 maand)
            </p>

            <ExpandButton
              button={{ title: "Plaats uw evenement!", variant: "primary full" }}
              isOpen={isOpen}
              onClick={() => {
                toggleOpened();
              }}
            />
            <ExpandBlock
              title={"Informatie aanvraag"}
              isOpen={isOpen}
              onClick={() => {
                toggleOpened();
              }}
            >
              <form action="#">
                <div className="form__list">
                  <RadioButton isChecked id={"from-radio"} name={"radio"} value={"Dhr."} label={"Dhr."} />
                  <RadioButton id={"from-radio2"} name={"radio"} value={"Mevr."} label={"Mevr."} />
                </div>
                <Input label={"Naam"} name={"Naam"} />
                <Input label={"E-mailadres"} name={"e-mail"} />
                <Input label={"Telefoonnummer"} name={"phone"} />
                <Input label={"Bedrijfsnaam"} name={"bedrijfsnaam"} />
                <Input label={"Titel v/d advertentie"} name={"advertentie"} />
                <TextArea label={"Vraag of opmerking (optioneel)"} name={"textarea"} />
                <div className="form__item">
                  <Checkbox isChecked={true} name={"privacy"} label={"Aanmelden voor de WMDK nieuwsbrief"} />
                </div>
                <Button title={"Verstuur evenement"} variant={"primary full"} />
              </form>
            </ExpandBlock>
          </div>
        </div>
      </Section>
      <FooterComponent />
    </div>
  );
};

export { AdverteerderWordenComponent };
