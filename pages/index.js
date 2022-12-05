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
  PersonalInfo
} from "../components/Forms";
import FormCompleted from "../components/FormCompleted";

const App = () => {
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  console.log(formStep);
  return (
    <div className={styles.container}>
      <Head>
        <title>DISEÑANDO MI CASA - Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet" />
      </Head>
      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
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
        
        {formStep > 6 && <FormCompleted />}
      </FormCard>
    </div>
  );
};

export default App;
