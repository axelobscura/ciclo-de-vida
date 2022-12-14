import { useState, useEffect, useRef } from "react";
import { useFormData } from "../context";

export default function FormCompleted() {
  const [ resultado, setResultado ] = useState(0);
  const [ espesor, setEspesor ] = useState(6);
  const [ planta, setPlanta ] = useState(0);
  const [ muros, setMuros ] = useState(50.3);
  const [ resultadoMuros, setResultadoMuros ] = useState(0);
  const [ resultadoPisos, setResultadoPisos ] = useState(0);
  const { data } = useFormData();
  const formRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    //console.log(e.target.planta.value);
    setResultado(resultado * Math.random());
    let areaPlanta = e.target.planta.value;
    let areaPiso = e.target.piso.value;
    if(espesor === 6){
      setPlanta(areaPlanta * 17.34);
    } else {
      setPlanta(areaPlanta * 22.91);
    }
    setResultadoMuros(parseFloat(areaPiso) * parseFloat(muros));
    setResultado((parseFloat(areaPiso) * parseFloat(muros)) * 2);
    setResultadoPisos(parseFloat(areaPiso) * parseFloat(muros) * 0.78);
  }

  const espesores = (e) => {
    setEspesor(e.target.value)
  }

  const losmuros = (e) => {
    setMuros(e.target.value)
  }

  return (
    <>
      <h2>CALCULADORA DE EMISIONES CO<sub>2</sub> (kgCO<sub>2</sub>e)</h2>
      <h3 className="resulta" style={{
        marginBottom: '30px'
      }}>EMISIONES TOTALES DE CO2: <span className="azul">{resultado.toFixed(2)} PARTÍCULAS ANUALES</span></h3>
      
      <div className="calculadora">
        
        <div>
          <form onSubmit={handleSubmit}>
            <div className="regate">
              <div>
                <label className="mio">Área de la planta (mts):</label>
                <input type="number" name="planta" placeholder="60" required />
              </div>
              <div>
                <label className="mio">Espesor del concreto:</label>
                <select name="espesor" id="cars" onChange={espesores}>
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
                <select name="muros" id="cars" onChange={losmuros}>
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
          </form>
        </div>
        <div>
        <div className="resultados">
        <div className="topa">
          <div className="txt">
            <h3 className="resulta">EMISIONES DE CO<sub>2</sub> DE LA PLANTA:</h3>
            <p>Espesor del concreto: {espesor}</p>
          </div>
          <div className="rst">
            <h3 className="resulta">{planta.toFixed(2)} kgCO<sub>2</sub>e</h3>
            <p>ANUALES</p>
          </div>
        </div>
      </div>
      <div className="resultados">
        <div className="topa">
          <div className="txt">
            <h3 className="resulta">EMISIONES DE CO<sub>2</sub> DE MUROS:</h3>
            <p>Tipo de muro: {muros}</p>
          </div>
          <div className="rst">
            <h3 className="resulta">{resultadoMuros.toFixed(2)} kgCO<sub>2</sub>e</h3>
            <p>ANUALES</p>
          </div>
        </div>
      </div>
      <div className="resultados">
        <div className="topa">
          <div className="txt">
            <h3 className="resulta">EMISIONES DE CO<sub>2</sub> DE PISOS:</h3>
          </div>
          <div className="rst">
            <h3 className="resulta">{resultadoPisos.toFixed(2)} kgCO<sub>2</sub>e</h3>
            <p>ANUALES</p>
          </div>
        </div>
      </div>
          {/*<img src="/SECO-CON-LLUVIAS-PLANO.png" alt="" title="" className="img-responsive" />*/}
        </div>
      </div>
      {/* 
      <pre>{JSON.stringify(data)}</pre>
      */}
    </>
  );
}
