import { useFormData } from "../context";

export default function FormCompleted() {
  const { data } = useFormData();

  return (
    <>
      <h2>Generación de recomendaciones y diagrama de funcionamiento</h2>
      <p><small>Diagrama de funcionamiento como guía para que el usuario pueda construir su casa</small></p>
      <h2 style={{'marginTop':'40px'}}>EMISIONES CO2</h2>
      {/* 
      <pre>{JSON.stringify(data)}</pre>
      */}
    </>
  );
}
