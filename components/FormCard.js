import styles from "../styles/styles.module.scss";

export default function FormCard({ children, currentStep, prevFormStep }) {
  return (
    <div className={styles.formCard}>
      <div style={{'marginBottom':'30px'}}>
        <img src="http://www.imcyc.net/wp-content/uploads/2017/04/logo_imcyc.png" alt="imcyc" title="imcyc" />
        <p style={{'padding':'15px 0'}}><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
      </div>
      {currentStep < 4 && (
        <>
          <span className={styles.steps} style={{'marginBottom':'30px'}}>Paso {currentStep + 1} de 4</span>
          {currentStep > 0 && (
            <button
              className={styles.back}
              onClick={prevFormStep}
              type="button"
            >
              REGRESAR
            </button>
          )}
        </>
      )}
      {children}
      
    </div>
  );
}
