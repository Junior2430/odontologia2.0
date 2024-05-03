// Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Odontología Zafra</h3>
        <div className={styles.info}>
          <p>Dirección: Calle Principal, Ciudad</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Correo: info@odontologiazafra.com</p>
        </div>
      </div>
      <div className={styles.column}>
        <h3>Acerca de</h3>
        <ul>
          <li><a href="#" className={styles.link}>Nuestra Clínica</a></li>
          <li><a href="#" className={styles.link}>Nuestro Equipo</a></li>
          <li><a href="#" className={styles.link}>Servicios</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Información</h3>
        <ul>
          <li><a href="#" className={styles.link}>Preguntas Frecuentes</a></li>
          <li><a href="#" className={styles.link}>Política de Privacidad</a></li>
          <li><a href="#" className={styles.link}>Términos y Condiciones</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387271.55618175994!2d-74.25987320745236!3d40.69767000515851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1619830153819!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={styles.column}>
        <h3>Contactanos</h3>
        <form>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo Electrónico" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className={styles.socialMedia}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
