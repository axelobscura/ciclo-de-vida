import { useRef } from "react";
import styles from "../../styles/styles.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";
import { useFormData } from "../../context";
import * as yup from "yup";

const schema = yup.object().shape({
  planta: yup
    .string()
    .min(2, "Address is too short")
    .required("Address is required"),
});

export default function Kilowatts({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    
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
    <div className={formStep === 7 ? styles.showForm : styles.hideForm}>
      <h2>Ingresa los Kilowatts (kWh) de tu último recibo de luz</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.preguntas}>
            <Input name="kilowatts" label="Ingresa los Kilowatts" type="number" />
          </div>
        </div>
        <button type="submit">SIGUIENTE</button>
      </Form>
    </div>
  );
}
