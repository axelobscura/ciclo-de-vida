import { useRef } from "react";
import styles from "../../styles/styles.module.scss";
import { Form } from "@unform/web";
import Input from "../Input Fields/Input";
import CheckBox from "../Input Fields/CheckBox";
import { useFormData } from "../../context";
import * as yup from "yup";

const schema = yup.object().shape({
  planta: yup
    .string()
    .min(2, "Address is too short")
    .required("Address is required"),
});

export default function Planta({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed - do something with data
      setFormValues(data);
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
    <div className={formStep === 4 ? styles.showForm : styles.hideForm}>
      <h2>¿Cuantos niveles/plantas quieres?</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.preguntas}>
            <CheckBox name="planta" label="Un Nivel/Planta" value="Un Nivel/Planta" />
            <CheckBox name="planta" label="Dos Niveles/Plantas" value="Dos Niveles/Plantas" />
          </div>
        </div>
        <button type="submit">SIGUIENTE</button>
      </Form>
    </div>
  );
}
