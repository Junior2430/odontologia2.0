import React from 'react';
import Button from 'react-bootstrap/Button';
import banner_pequeño from "../../assets/img/banner_pequeño.jpg"
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Olivade&family=Roboto&display=swap" />



const Titular = ()=>{
    

    
    return(
        <div className="nombre">
            <h1 className="mi-h1">Dr. Andres Zafra  </h1>
            <h3>Odontólogo</h3>
            <h3>Pontificia Universidad Javeriana</h3>
            <Button variant="info">Agenda tu cita</Button>{' '}
        </div>

    )

    
}

export default Titular;