import { useRef } from "react";
import styles from "../../styles/styles.module.scss";
import { Form } from "@unform/web";
import Select from "../Input Fields/Select";
import { useFormData } from "../../context";
import * as yup from "yup";


export default function Personas({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    console.log(data);
    try {
      /*
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed - do something with data
      
      setFormValues(data);
      */
      nextFormStep();
    } catch (err) {
      const errors = {};
      // Validation failed - do show error
      if (err instanceof yup.ValidationError) {
        console.log(err.inner);
        // Validation failed - do show error
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        formRef.current.setErrors(errors);
      }
    }
  }

  return (
    <div className={formStep === 9 ? styles.showForm : styles.hideForm}>
      <h2>Selecciona el número de personas que vivirán contigo</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <Select name="radiacion" label="Seleccione número de personas:" value="" />
        </div>
        <button type="submit">SIGUIENTE</button>
      </Form>
    </div>
  );
}
