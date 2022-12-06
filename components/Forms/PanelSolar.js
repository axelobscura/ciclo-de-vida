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

export default function PanelSolar({ formStep, nextFormStep }) {
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
    <div className={formStep === 7 ? styles.showForm : styles.hideForm}>
      <h2>Selecciona el tipo de ahorro</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.preguntas} style={{'textAlign':'left'}}>
            <CheckBox name="tipoahorro" label="LED - Ahorro 80%" value="80" />
            <CheckBox name="tipoahorro" label="LFC - Ahorro 50%" value="50" />
          </div>
          <div className={styles.preguntas}>
            <CheckBox name="tipoahorro" label="Halógeno - Ahorro 20%" value="20" />
            <CheckBox name="tipoahorro" label="Incandescente - Ahorro 0%" value="0" />
          </div>
        </div>
        <button type="submit">SIGUIENTE</button>
      </Form>
    </div>
  );
}
