import * as React from "react";
import styles from "./contact-form-component.module.scss";
import { Input } from "../input";
import { Checkbox } from "../checkbox/checkbox.component";
import { Button } from "@app/prep/modules-prep/core";
import { TextAreaComponent } from "../text-area";
import { RadioButtonComponent } from "../radio-button";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import { validateEmail } from "@app/util/validate-email";
import { DatePickerComponent } from "../date-picker";

interface IContactFormErrorMessages {
  comment: string;
  date: string;
  emailAddress: string;
  name: string;
  numberPerson: string;
  phone: string;
}
export interface IContactFormValues {
  comment: string;
  date: string;
  emailAddress: string;
  gender: string;
  name: string;
  numberPerson: number;
  phone: string;
  subscribed: boolean;
}
const formOnChange = () => {
  return;
};
const InnerForm = (props: FormikProps<IContactFormValues>) => {
  const { touched, errors } = props;
  const [isChecked, setIsChecked] = React.useState(true);
  const onDatePickerChange = (date: Date | null, id: string) => {
    let newValue: Date | null | string = date;

    if (newValue) {
      newValue = newValue.toISOString();
    }

    props.handleChange(newValue);
    props.setFieldValue(id, newValue);
  };

  return (
    <Form action={"#"} className={styles["contact-form"]} onChange={formOnChange}>
      <div className={styles["contact-form-radio-label"]}>Aanhef</div>
      <div className={styles["contact-form-head"]}>
        <RadioButtonComponent
          isChecked
          id={"from-radio-dhr"}
          name={"radio"}
          value={"Dhr."}
          label={"Dhr."}
          onChange={props.handleChange}
        />
        <RadioButtonComponent
          id={"from-radio-mevr"}
          name={"radio"}
          value={"Mevr."}
          label={"Mevr."}
          onChange={props.handleChange}
        />
      </div>
      <Input
        label="Naam"
        name="name"
        errorMessage={touched.name ? errors.name : ""}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.name}
      />
      <Input
        label={"E-mailadres"}
        name={"emailAddress"}
        errorMessage={touched.emailAddress ? errors.emailAddress : ""}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.emailAddress}
      />
      <Input
        label={"Telefoonnummer"}
        name={"phone"}
        errorMessage={touched.phone ? errors.phone : ""}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.phone}
      />
      <Input
        label={"Aantal personen"}
        name={"numberPerson"}
        type="number"
        errorMessage={touched.numberPerson ? errors.numberPerson : ""}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.numberPerson}
        min={0}
      />
      <DatePickerComponent
        label="Geplande datum"
        value={props.values.date}
        onChange={onDatePickerChange}
        onBlur={onDatePickerChange}
        includeTime
        id="date"
      />
      <TextAreaComponent label={"Vraag of opmerking (optioneel)"} name={"textarea"} />
      <div className={styles["contact-form-bottom"]}>
        <Checkbox
          isChecked={isChecked}
          name={"privacy"}
          label={"Aanmelden voor de WMDK nieuwsbrief"}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Button title={"Verstuur aanvraag"} variant={"secondary full large"} />
      </div>
    </Form>
  );
};

interface IFormProps {
  onSubmit: (values: IContactFormValues) => void;
}
export const ContactFormComponent = withFormik<IFormProps, IContactFormValues>({
  mapPropsToValues: () => ({
    comment: "",
    date: "",
    emailAddress: "",
    gender: "",
    name: "",
    numberPerson: 0,
    phone: "",
    subscribed: false
  }),

  validate: (values: IContactFormValues) => {
    const errors: FormikErrors<IContactFormErrorMessages> = {};
    const phoneNumberLength = 13;

    if (!values.name) {
      errors.name = "Vul uw naam in";
    }
    if (!values.emailAddress) {
      errors.emailAddress = "Vul uw e-mail adres in";
    } else if (!validateEmail(values.emailAddress)) {
      errors.emailAddress = "Geen valide e-mail adres";
    }
    if (!values.phone) {
      errors.phone = "Vul uw telefoonnummer in";
    } else if (values.phone.length > phoneNumberLength) {
      errors.phone = "telefoonnummer mag niet langer zijn dan 13 tekens";
    }
    if (values.numberPerson < 0) {
      errors.numberPerson = "aantal personen moet een positief getal zijn";
    }

    return errors;
  },

  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values);
  }
})(InnerForm);
