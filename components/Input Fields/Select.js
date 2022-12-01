import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styles from "../../styles/styles.module.scss";

const Select = ({ name, label, ...rest }) => {
  const inputRef = useRef();

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label htmlFor={fieldName} style={{'margin':'20px 0'}}>{label}</label>
      <select name={name} id={name} className={styles.select} ref={inputRef}>
        <option value="Aguascalientes">Aguascalientes </option>
        <option value="Baja California">Baja California </option>
        <option value="Baja California Sur">Baja California Sur </option>
        <option value="Campeche">Campeche </option>
        <option value="Chiapas">Chiapas </option>
        <option value="Chihuahua">Chihuahua </option>
        <option value="Ciudad de México">Ciudad de México </option>
        <option value="Coahuila">Coahuila </option>
        <option value="Colima">Colima </option>
        <option value="Durango">Durango </option>
        <option value="Estado de México">Estado de México </option>
        <option value="Guanajuato">Guanajuato </option>
        <option value="Guerrero">Guerrero </option>
        <option value="Hidalgo">Hidalgo </option>
        <option value="Jalisco">Jalisco </option>
        <option value="Michoacán">Michoacán </option>
        <option value="Morelos">Morelos </option>
        <option value="Nayarit">Nayarit </option>
        <option value="Nuevo León">Nuevo León </option>
        <option value="Oaxaca">Oaxaca </option>
        <option value="Puebla">Puebla </option>
        <option value="Querétaro">Querétaro </option>
        <option value="Quintana Roo">Quintana Roo </option>
        <option value="San Luis Potosí">San Luis Potosí </option>
        <option value="Sinaloa">Sinaloa </option>
        <option value="Sonora">Sonora </option>
        <option value="Tabasco">Tabasco </option>
        <option value="Tamaulipas">Tamaulipas </option>
        <option value="Tlaxcala">Tlaxcala </option>
        <option value="Veracruz">Veracruz </option>
        <option value="Yucatán">Yucatán </option>
        <option value="Zacatecas">Zacatecas </option>
      </select>

      {error && <p className={styles.errorText}>{error}</p>}
    </>
  );
};

export default Select;
