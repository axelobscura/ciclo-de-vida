import { useState, useRef } from "react";
import Head from "next/head";
import styles from "../styles/styles.module.scss";
import FormCard from "../components/FormCard";
import {
  BillingInfo,
  Clima,
  Planta,
  Luz,
  ConfirmPurchase,
  PersonalInfo,
  TipoAhorro,
  Kilowatts,
  Predio,
  Acceso,
  Arboles
} from "../components/Forms";
import FormCompleted from "../components/FormCompleted";
import { Canvas, useFrame } from '@react-three/fiber';
import Box from "../components/Box";

const App = () => {
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  console.log(formStep);
  return (
    <div className={styles.container}>
      <Head>
        <title>DISEÑANDO MI CASA - Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;700&display=swap" rel="stylesheet" /> 
      </Head>
      
      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <>
            <Canvas>
              <ambientLight intensity={0.1} />
              <directionalLight />
              <pointLight position={[10, 10, 10]} />
              <Box position={[0, 0, 0]} />
            </Canvas>
            <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
          </>
        )}
        {formStep >= 1 && (
          <BillingInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <ConfirmPurchase formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 3 && (
          <Clima formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 4 && (
          <Planta formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 5 && (
          <Luz formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 6 && (
          <TipoAhorro formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 7 && (
          <Kilowatts formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {/* 
        {formStep >= 8 && (
          <Radiacion formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 9 && (
          <Personas formStep={formStep} nextFormStep={nextFormStep} />
        )}
        */}
        {formStep >= 8 && (
          <Predio formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 9 && (
          <Acceso formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 10 && (
          <Arboles formStep={formStep} nextFormStep={nextFormStep} />
        )}
        
        {formStep > 10 && <FormCompleted />}
      </FormCard>
    </div>
  );
};

export default App;
