import React from 'react';
import Contacto from '../Contact/index';
import TarjetaContacto from './TarjetaContacto/TarjetaContacto';
import mision from '../../assets/img/MIsion.png';
import vision from '../../assets/img/Vision.png';
import valores from '../../assets/img/Valores.png';
const SobreNosotros = () => (
  <div className="contenedorSobreNosotros">
      <h2>Nuestra Misión, Visión y Valores</h2>
    <div className="sobreNosotrosMVV">
      <div className="MVV">
        <img src={mision} />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div className="MVV">
        <img src={vision} />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div className="MVV">
        <img src={valores} />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    </div>

    <h2>Nuestro Equipo</h2>
    <div className = 'sobreNosotrosTarjetaConctacto row'>
      <TarjetaContacto />
      <TarjetaContacto />
      <TarjetaContacto />
    </div>

  </div>
);

export default SobreNosotros;
