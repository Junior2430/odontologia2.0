// SecondView.js
import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./SecondView.module.css";
import ortodoncia from "../../Assets/images/ortodoncia.jpg";
import limpiezadental from "../../Assets/images/limpieza.jpg";
import odontopediatria from "../../Assets/images/odontopediatria.jpg";
import protesisdental from "../../Assets/images/protesisdental.jpg";
import cirugiaoral from "../../Assets/images/cirujiaoral.jpg";

// Install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SecondView = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Servicios</h2>
    <div className={styles.carouselContainer}>
       
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <img src={ortodoncia} alt="Slide 1" />
            <h3>Ortodoncia</h3>
            <p>
              La ortodoncia es una rama de la odontología que se enfoca en{" "}
              <br></br>
              corregir la posición de los dientes y la mandíbula para mejorar{" "}
              <br></br> la estética y la función bucal. Esto se logra mediante
              el uso de <br></br>
              brackets y alineadores dentales. El objetivo es crear una sonrisa{" "}
              <br></br>
              más saludable y armoniosa.
              <br></br>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src={limpiezadental} alt="Slide 2" />
            <h3>Limpieza dental</h3>
            <p>
              La limpieza dental, también conocida como profilaxis dental, es{" "}
              <br></br> un procedimiento realizado para eliminar la placa
              bacteriana y el <br></br>
              sarro de los dientes, ayudando prevenir problemas de salud{" "}
              <br></br> bucal como caries, enfermedad de las encías y mal
              aliento,<br></br> además de mantener una boca más saludable y
              fresca.{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src={odontopediatria} alt="Slide 2" />
            <h3>Odontopediatría</h3>
            <p>
              La odontopediatría es una rama de la odontología que se <br></br>
              especializa en la atención dental de niños y adolescentes. Su
              <br></br>
              objetivo estratar problemas de salud bucal, brindando<br></br>{" "}
              cuidado preventivo, tratamientos restaurativos y educación
              <br></br> sobre higiene oral.{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src={protesisdental} alt="Slide 2" />
            <h3>Prótesis dental</h3>
            <p>
              El servicio de prótesis dental implica la creación y colocación
              <br></br> de prótesis dentales personalizadas, como dentaduras
              <br></br> completas o parciales, para reemplazar dientes perdidos.
              <br></br> Estos servicios son esenciales para quienes han sufrido
              <br></br> pérdida dental y desean recuperar su sonrisa y capacidad
              <br></br> de masticación.<br></br> <br></br>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <img src={cirugiaoral} alt="Slide 2" />
            <h3>Cirugía oral</h3>
            <p>
              La cirugía oral es una rama de la odontología que se enfoca en
              <br></br>
              procedimientos quirúrgicos como extracciones de dientes, cirugía
              <br></br>
              de implantes dentales y otros procedimientos para corregir
              <br></br>
              problemas bucales y maxilofaciales. Estos procedimientos se
              <br></br>
              realizan para restaurar la salud y la función oral.
            </p>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides for additional images */}
      </Swiper>
    </div>
    </div>
  );
};

export default SecondView;
