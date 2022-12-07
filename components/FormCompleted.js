import { useState, useRef } from "react";
import { useFormData } from "../context";
import { Form } from "@unform/web";
import Input from "./Input Fields/Input";

export default function FormCompleted() {
  const [ resultado, setResultado ] = useState(148);
  const { data } = useFormData();
  const formRef = useRef();

  async function handleSubmit(data) {
    console.log(data);
    setResultado(resultado * Math.random());
  }

  return (
    <>
      <h2 style={{'marginTop':'40px'}}>CALCULADORA DE EMISIONES CO2</h2>
      <h3 className="resulta">EMISIONES DE CO2: <span className="azul">{resultado} PARTÍCULAS ANUALES</span></h3>
      <div className="calculadora">
        <div>
          <img src="/SECO-CON-LLUVIAS-PLANO.png" alt="" title="" className="img-responsive" />
        </div>
        <div>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div className="regate">
              <div>
                <label className="mio">Área de la planta (mts):</label>
                <input type="number" name="planta" placeholder="60" required />
              </div>
              <div>
                <label className="mio">Espesor del concreto:</label>
                <select name="espesor" id="cars">
                  <option value="6">6</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>
            <div className="regate">
              <div>
                <label className="mio">Área de piso (mts):</label>
                <input type="number" name="piso" placeholder="60" required />
              </div>
              <div>
                <label className="mio">Con muros de:</label>
                <select name="muros" id="cars">
                  <option value="50.30">Ladrillo multiperforado 10x10x28</option>
                  <option value="51.60">Block de concreto 10x20x40</option>
                  <option value="5.96">Tablaroca</option>
                  <option value="17.88">Durok</option>
                </select>
              </div>
            </div>
            <div className="regate">
              <div>
                <label className="mio">Área de muros (mts):</label>
                <input type="number" name="amuros" placeholder="145" required />
              </div>
              <div>
              <button type="submit">CALCULAR</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
      {/* 
      <pre>{JSON.stringify(data)}</pre>
      */}
    </>
  );
}
