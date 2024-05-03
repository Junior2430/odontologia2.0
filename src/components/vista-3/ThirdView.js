// ThirdView.js
import React from 'react';
import styles from './ThirdView.module.css';
import img1 from  '../../Assets/images/quien.jpg'
import img2 from  '../../Assets/images/quien2.jpg'

const ThirdView = () => {
    return (
      <div className={styles.container}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h2>¿Quiénes Somos?</h2>
            <p>Somos una clínica odontológica comprometida con la salud bucal de nuestros pacientes. Nuestro equipo de profesionales altamente calificados se dedica a proporcionar tratamientos dentales de alta calidad en un ambiente amigable y confortable.</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={img1} alt="Dentist" />
          </div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.bottomImage}>
            <img src={img2} alt="Clinic" />
          </div>
          <div className={styles.missionVision}>
            <h3>Misión</h3>
            <p>Nuestra misión es proporcionar a nuestros pacientes una atención odontológica excepcional, centrada en su bienestar y comodidad.</p>
            <h3>Visión</h3>
            <p>Nuestra visión es convertirnos en la clínica odontológica líder, reconocida por nuestra excelencia en el servicio y la satisfacción del paciente.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ThirdView;
