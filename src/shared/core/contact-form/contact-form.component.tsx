import * as React from "react";
import styles from "./contact-form-component.module.scss";
import { Input } from "../input";
import { Checkbox } from "../checkbox/checkbox.component";
import { Button } from "@app/prep/modules-prep/core";
import { TextAreaComponent } from "../text-area";
import { RadioButtonComponent } from "../radio-button";

export interface IContactFormComponentProps {}
const formOnChange = () => {
  return;
};
const ContactFormComponent = (props: IContactFormComponentProps) => {
  const checkedObject: any = {};
  const [checkedItems, setCheckedItems] = React.useState(checkedObject);
  const handleChange = (event: any) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: {
        name: event.target.name,
        value: event.target.value
      }
    });
  };

  return (
    <form action="#" className={styles["contact-form"]} onChange={formOnChange}>
      <h2>Vrijblijvende offerte / prijsindicatie</h2>
      Vraag vrijblijvend een prijsindicatie aan en ontvang informatie op maat!
      <div className={styles["contact-form-radio-label"]}>Aanhef</div>
      <div className={styles["contact-form-head"]}>
        <RadioButtonComponent
          isChecked
          id={"from-radio-dhr"}
          name={"radio"}
          value={"Dhr."}
          label={"Dhr."}
          onChange={handleChange}
        />
        <RadioButtonComponent
          id={"from-radio-mevr"}
          name={"radio"}
          value={"Mevr."}
          label={"Mevr."}
          onChange={handleChange}
        />
      </div>
      <Input label={"Naam"} name={"Naam"} />
      <Input label={"E-mailadres"} name={"e-mail"} />
      <Input label={"Telefoonnummer"} name={"phone"} />
      <Input label={"Aantal personen"} name={"aantal-personen"} />
      <Input label={"Geplande datum"} name={"geplande-datum"} />
      <TextAreaComponent label={"Vraag of opmerking (optioneel)"} name={"textarea"} />
      <div className={styles["contact-form-bottom"]}>
        <Checkbox
          isChecked={true}
          name={"privacy"}
          label={"Aanmelden voor de WMDK nieuwsbrief"}
          onChange={handleChange}
        />
        <Button title={"Verstuur aanvraag"} variant={"secondary full large"} />
      </div>
    </form>
  );
};

export { ContactFormComponent };
