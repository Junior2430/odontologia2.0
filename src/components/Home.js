// Home.js
import React from 'react';

 import Header from '../components/Header/Header';
 import DoctorInfo from '../components/vista-1/DoctorInfo';
 import SecondView from './vista-2/SecondView';
 import ThirdView from './vista-3/ThirdView';
 import Footer from './Footer/Footer';
 import LoginRegister from './Login-register/LoginRegister';
 

import styles from './Home.module.css';

function Home() {

  return (
    
      <div className={styles.homeContainer}>
      { <Header /> }
      <div className={styles.content}>
        <DoctorInfo />
        <div className={styles.secondview}>
          <SecondView  />
          <ThirdView   />
          <Footer />
          <LoginRegister  />
        </div>
      </div>
    </div>

    
    
  );
}

export default Home;

