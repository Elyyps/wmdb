import * as React from "react";
import styles from "./faq-form-component.module.scss";
import { TextAreaComponent } from "@app/core/text-area";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import { validateEmail } from "@app/util/validate-email";
import { Button } from "../button";
import { Input } from "../input";

interface IFAQFormErrorMessages {
  emailAddress: string;
  name: string;
}
export interface IFAQFormValues {
  emailAddress: string;
  name: string;
}
const InnerForm = (props: FormikProps<IFAQFormValues>) => {
  const { touched, errors } = props;

  return (
    <div className={styles["faq-form"]}>
      <Form action="#">
        <Input
          label={"Naam"}
          name={"name"}
          errorMessage={touched.name ? errors.name : ""}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.name}
        />
        <br />
        <Input
          label={"E-mailadres"}
          name={"emailAddress"}
          errorMessage={touched.emailAddress ? errors.emailAddress : ""}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.emailAddress}
        />
        <TextAreaComponent label={"Vraag of opmerking (optioneel)"} name={"textarea"} />
        <div className="form__item">
          <Button title={"Verstuur mijn vraag"} variant={"secondary"} fullWidth />
        </div>
      </Form>
    </div>
  );
};
interface IFormProps {
  onSubmit: (values: IFAQFormValues) => void;
}
export const FAQFormComponent = withFormik<IFormProps, IFAQFormValues>({
  mapPropsToValues: () => ({
    emailAddress: "",
    name: ""
  }),

  validate: (values: IFAQFormValues) => {
    const errors: FormikErrors<IFAQFormErrorMessages> = {};

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
