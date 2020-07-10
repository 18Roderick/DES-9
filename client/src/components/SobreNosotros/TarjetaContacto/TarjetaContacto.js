import React from 'react';
import imagenPerfil from '../../../assets/img/roderick.jpg';

const TarjetaContacto = () => (
  <div class="carta col-md-6 col-sm-12 col-xl-4">
    <img src={imagenPerfil} alt="John" />
    <h1>John Doe</h1>
    <p class="titulo">CEO Founder, Example</p>
    <p>Harvard University</p>
    <a href="#">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="#">
      <i class="fab fa-facebook"></i>
    </a>
    <p>
      <button className='buttonContacto'>Contacto</button>
    </p>
  </div>
);

export default TarjetaContacto;
