// Header.js
import React from "react";
import styles from "../Header/Header.module.css";
import Logo from "../../Assets/images/Logo.png";



function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Quiénes Somos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Iniciar Sesión</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
