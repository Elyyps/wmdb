import * as React from "react";
import styles from "./contact-form-component.module.scss";
import { Input } from "../input";
import { Checkbox } from "../checkbox/checkbox.component";
import { Button } from "@app/core/button";
import { TextAreaComponent } from "../text-area";
import { RadioButtonComponent } from "../radio-button";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import { validateEmail } from "@app/util/validate-email";
import { DatePickerComponent } from "../date-picker";
import { ShareSocialComponent } from "../share-social";

interface IContactFormErrorMessages {
  emailAddress: string;
  name: string;
}
export interface IContactFormValues {
  comment: string;
  companyName: string;
  date: string;
  emailAddress: string;
  gender: string;
  name: string;
  numberPerson: number | undefined;
  phone: string;
  place: string;
  postCode: string;
  streetNumber: number | undefined;
  subscribed: boolean;
}
const formOnChange = () => {
  return;
};
const InnerForm = (props: FormikProps<IContactFormValues>) => {
  const { touched, errors } = props;
  const [isChecked, setIsChecked] = React.useState(true);
  const [isMan, setIsMan] = React.useState(true);

  const onDatePickerChange = (date: Date | null, id: string) => {
    let newValue: Date | null | string = date;

    if (newValue) {
      newValue = newValue.toISOString();
    }

    props.handleChange(newValue);
    props.setFieldValue(id, newValue);
  };
  const handleChange = (event: any, isWoman: boolean) => {
    if (isWoman) {
      setIsMan(false);
    } else {
      setIsMan(true);
    }
    props.handleChange(event);
  };

  return (
    <Form action={"#"} className={styles["contact-form"]} onChange={formOnChange}>
      <div className={styles["contact-form-radio-label"]}>Aanhef</div>
      <div className={styles["contact-form-head"]}>
        <RadioButtonComponent
          isChecked={isMan ? true : false}
          id={"from-radio-dhr"}
          name={"radio"}
          value={props.values.gender}
          label={"Dhr."}
          onChange={(e: EventListener) => handleChange(e, false)}
        />
        <RadioButtonComponent
          isChecked={!isMan ? true : false}
          id={"from-radio-mevr"}
          name={"radio"}
          value={props.values.gender}
          label={"Mevr."}
          onChange={(e: EventListener) => handleChange(e, true)}
        />
      </div>
      <Input
        placeholder="Naam"
        name="name"
        errorMessage={touched.name ? errors.name : ""}
        onChange={(e: any) => {
          props.handleChange(e);
        }}
        onBlur={(e: any) => {
          props.handleBlur(e);
        }}
        value={props.values.name}
        isRequired
      />
      <Input
        placeholder="Bedrijfsnaam"
        name="companyName"
        onChange={(e: any) => {
          props.handleChange(e);
        }}
        onBlur={(e: any) => {
          props.handleBlur(e);
        }}
        value={props.values.companyName}
      />
      <Input
        placeholder={"E-mailadres"}
        name={"emailAddress"}
        errorMessage={touched.emailAddress ? errors.emailAddress : ""}
        onChange={(e: any) => {
          props.handleChange(e);
        }}
        onBlur={(e: any) => {
          props.handleBlur(e);
        }}
        value={props.values.emailAddress}
        isRequired
      />
      <Input
        placeholder={"Telefoonnummer"}
        name={"phone"}
        onChange={(e: any) => {
          props.handleChange(e);
        }}
        onBlur={(e: any) => {
          props.handleBlur(e);
        }}
        value={props.values.phone}
      />
      <Input
        placeholder={"Aantal personen"}
        name={"numberPerson"}
        type="number"
        errorMessage={touched.numberPerson ? errors.numberPerson : ""}
        onChange={(e: any) => {
          props.handleChange(e);
        }}
        onBlur={(e: any) => {
          props.handleBlur(e);
        }}
        value={props.values.numberPerson}
        min={1}
      />
      <DatePickerComponent
        placeholder="Geplande datum"
        value={props.values.date}
        onChange={onDatePickerChange}
        onBlur={onDatePickerChange}
        includeTime
        id="date"
      />
      <Input
        placeholder={"Straat en huisnummer"}
        name={"streetNumber"}
        type="number"
        errorMessage={touched.streetNumber ? errors.streetNumber : ""}
        onChange={(e: any) => {
          props.handleChange(e);
        }}
        onBlur={(e: any) => {
          props.handleBlur(e);
        }}
        value={props.values.streetNumber}
        min={0}
      />
      <div className={styles["contact-form-align"]}>
        <Input
          placeholder={"Postcode"}
          name={"postCode"}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.postCode}
        />
        <Input
          placeholder={"Plaats"}
          name={"place"}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.place}
        />
      </div>

      <TextAreaComponent placeholder={"Vraag of opmerking (optioneel)"} name={"textarea"} />
      <div className={styles["contact-form-bottom"]}>
        <Checkbox
          isChecked={isChecked}
          name={"privacy"}
          label={"Aanmelden voor de WMDK nieuwsbrief"}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Button title={"Verstuur aanvraag"} variant={"secondary"} fullWidth large />
        <div className={styles["contact-form-mail"]}>
          <ShareSocialComponent
            email={{
              title: "Hi , I'm sending this email to inform you that ....",
              subject: "Webbio email test for WMDB",
              url: "https://www.webbio.nl",
              nameSocialShare: "Deel via mail"
            }}
          />
        </div>
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
    place: "",
    postCode: "",
    streetNumber: undefined,
    date: "",
    emailAddress: "",
    gender: "",
    name: "",
    numberPerson: undefined,
    phone: "",
    companyName: "",
    subscribed: false
  }),

  validate: (values: IContactFormValues) => {
    const errors: FormikErrors<IContactFormErrorMessages> = {};

    if (!values.name) {
      errors.name = "Vul uw naam in";
    }
    if (!values.emailAddress) {
      errors.emailAddress = "Vul uw e-mail adres in";
    } else if (!validateEmail(values.emailAddress)) {
      errors.emailAddress = "Geen valide e-mail adres";
    }

    return errors;
  },

  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values);
  }
})(InnerForm);
