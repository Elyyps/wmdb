import React, { useState } from "react";
import styles from "../single-wmdb-component.module.scss";

import { Button, ListCheckComponent, Checkbox, RadioButton, Input, TextArea } from "@app/prep/modules-prep/core";

export interface ISingleWmdkFormComponentProps {}

const formOnChange = () => {
  return;
};
const SingleWmdbForm = (props: ISingleWmdkFormComponentProps) => {
  const checkedObject: any = {};
  const [checkedItems, setCheckedItems] = useState(checkedObject);
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
    <form action="#" className={styles["single-wmdb-form"]} onChange={formOnChange}>
      <div className={styles["single-wmdb-form-label"]}>
        <ListCheckComponent labels={["Kwalitatief aanbod van uitjes"]} />
      </div>
      <div className={styles["single-wmdb-form-radio-label"]}>Aanhef</div>
      <div className={styles["single-wmdb-form-head"]}>
        <RadioButton
          isChecked
          id={"from-radio-dhr"}
          name={"radio"}
          value={"Dhr."}
          label={"Dhr."}
          onChange={handleChange}
        />
        <RadioButton id={"from-radio-mevr"} name={"radio"} value={"Mevr."} label={"Mevr."} onChange={handleChange} />
      </div>
      <Input label={"Naam"} name={"Naam"} />
      <Input label={"E-mailadres"} name={"e-mail"} />
      <Input label={"Telefoonnummer"} name={"phone"} />
      <Input label={"Bedrijfsnaam"} name={"bedrijfsnaam"} />
      <Input label={"Titel v/d advertentie"} name={"advertentie"} />
      <TextArea label={"Vraag of opmerking (optioneel)"} name={"textarea"} />
      <div className={styles["single-wmdb-form-bottom"]}>
        <Checkbox
          isChecked={true}
          name={"privacy"}
          label={"Aanmelden voor de WMDK nieuwsbrief"}
          onChange={handleChange}
        />
        <Button title={"Gebruik maken van de proefperiode"} variant={"secondary full large"} />
      </div>
    </form>
  );
};

export { SingleWmdbForm };
