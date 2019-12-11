import * as React from "react";
import { TextAreaComponent } from "@app/core/text-area";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import { validateEmail } from "@app/util/validate-email";
import { Button } from "../button";
import { Input } from "../input";
import styles from "./blog-single-form-component.module.scss";

export interface IBlogSingleFormComponentProps {}

interface IBlogSingleFormErrorMessages {
  emailAddress: string;
  name: string;
}
export interface IBlogSingleFormValues {
  emailAddress: string;
  name: string;
}
const InnerForm = (props: FormikProps<IBlogSingleFormValues>) => {
  const { touched, errors } = props;

  return (
    <div className={styles["faq-form"]}>
      <Form action="#">
        <Input
          label={"Naam"}
          name={"name"}
          placeholder="Naam"
          errorMessage={touched.name ? errors.name : ""}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.name}
        />
        <br />
        <Input
          label={"E-mailadres"}
          name={"emailAddress"}
          placeholder="Bv. jan@janssen.nl"
          errorMessage={touched.emailAddress ? errors.emailAddress : ""}
          onChange={(e: any) => {
            props.handleChange(e);
          }}
          onBlur={(e: any) => {
            props.handleBlur(e);
          }}
          value={props.values.emailAddress}
        />
        <TextAreaComponent label={"Reactie"} name={"textarea"} placeholder={"Type hier uw reactie"} />
        <div className="form__item">
          <Button title={"Reactie plaatsen"} variant={"primary"} />
        </div>
      </Form>
    </div>
  );
};
interface IFormProps {
  onSubmit: (values: IBlogSingleFormValues) => void;
}
export const BlogSingleFormComponent = withFormik<IFormProps, IBlogSingleFormValues>({
  mapPropsToValues: () => ({
    emailAddress: "",
    name: ""
  }),

  validate: (values: IBlogSingleFormValues) => {
    const errors: FormikErrors<IBlogSingleFormErrorMessages> = {};

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
