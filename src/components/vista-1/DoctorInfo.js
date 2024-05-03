// DoctorInfo.js
import React from 'react';
import styles from './DoctorInfo.module.css';
import doctor1 from '../../Assets/images/doctor1.png'
// import back from '../../Assets/images/background.png'

function DoctorInfo() {
  return (
    <div className={styles.doctorInfo}>
      <div className={styles.image}>
        <img src={doctor1} alt="Doctor" />
      </div>
      <div className={styles.text}>
        <h2 >Dr. Andres Zafra</h2>
        <p>Odontólogo</p>
        <p>Pontificia Universidad Javeriana</p>
        {/* <img src={back} alt="Decoración" className={styles.decoration} /> */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Agenda tu cita</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;
