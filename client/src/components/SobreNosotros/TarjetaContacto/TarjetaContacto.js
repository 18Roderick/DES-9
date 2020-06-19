import React from 'react';
import imagenPerfil from '../../../assets/img/loren.jpg';

const TarjetaContacto = () => (
  <div class="carta">
    <img src={imagenPerfil} alt="John" />
    <h1>John Doe</h1>
    <p class="titulo">CEO Founder, Example</p>
    <p>Harvard University</p>
    <a href="#">
      <i class="fab fa-dribbble"></i>
    </a>
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
      <button>Contacto</button>
    </p>
  </div>
);

export default TarjetaContacto;
