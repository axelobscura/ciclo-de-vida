import { useRef } from "react";
import styles from "../../styles/styles.module.scss";
import { Form } from "@unform/web";
import CheckBox from "../Input Fields/CheckBox";
import { useFormData } from "../../context";
import * as yup from "yup";

const schema = yup.object().shape({
  luz: yup
    .string()
    .required("Address is required"),
});

export default function Luz({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    
    try {
      formRef.current.setErrors({});
      /*
      await schema.validate(data, {
        abortEarly: false,
      });
      */
      // Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
    } catch (err) {
      const errors = {};
      // Validation failed - do show error
      console.log(err);
    }
    
  }

  return (
    <div className={formStep === 5 ? styles.showForm : styles.hideForm}>
      <h2>¿Qué luz prefieres?</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.preguntas}>
            <CheckBox name="luz" label="Blanca o Fría" value="Blanca" />
            <CheckBox name="luz" label="Amarilla o cálida" value="Amarilla" />
          </div>
        </div>
        <button type="submit">SIGUIENTE</button>
      </Form>
    </div>
  );
}
