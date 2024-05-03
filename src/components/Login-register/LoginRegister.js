// LoginRegister.js

import React, { useState } from 'react';
import styles from './Login-register.module.css';
import logo from '../../Assets/images/imagenLogin.jpg'; // Ruta de la imagen

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleTabChange = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.formContent}>
          <div className={styles.tabs}>
            <button onClick={handleTabChange} className={isLogin ? styles.active : ''}>Login</button>
            <button onClick={handleTabChange} className={!isLogin ? styles.active : ''}>Register</button>
          </div>
          <div className={styles.formContainer}>
            {isLogin ? (
              <form className={styles.form}>
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
            ) : (
              <form className={styles.form}>
                <h2>Register</h2>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Register</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
