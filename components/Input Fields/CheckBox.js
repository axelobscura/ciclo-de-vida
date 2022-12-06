import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styles from "../../styles/styles.module.scss";

export default function Checkbox({ name, label, value, ...rest }) {
  const inputRef = useRef();
  const { fieldName, fieldValue, defaultValue, registerField, error } = useField(name);

  const defaultChecked = defaultValue === value;

  useEffect(() => {
    registerField({
      name: fieldName,
      value: fieldValue,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.checked;
      },
      clearValue: (ref) => {
        ref.current.checked = defaultChecked;
      },
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
    });
  }, [defaultValue, fieldName, fieldValue, registerField, defaultChecked]);

  return (
    <div className={styles.elchecker}>
      <label htmlFor={fieldName} key={fieldName}>
        <input
          defaultChecked={defaultChecked}
          ref={inputRef}
          type="radio"
          id={fieldName}
          name={fieldName}
          value={value}
          {...rest}
        />
        {label}
      </label>

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
