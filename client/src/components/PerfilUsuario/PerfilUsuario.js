import React from 'react';
import imgperfil from './../../assets/img/roderick.jpg';
import imgbanner from './../../assets/img/smite.png';

const PerfilUsuario = () => (
  <div className="perfilusuario">
    <div className="perfilusuario-banner">
      <img src={imgbanner}></img>
    </div>
    <div className="perfilusuario-info">
      <div className="imgperfil-wrapper">
        <img src={imgperfil} />
      </div>

      <div className="perfilusuario-contenedor">
        <div className="pu-contenedorinfo">
          <div className="perfilusuario-labels">
            <label className="pulNombre">Roderick Romero</label>
            <label className="pulPais">Panamá</label>
            <ul className="pu-ul">
              <li>Panamá</li>
              <li>San Miguelito</li>
              <li>Samaria</li>
            </ul>
            <label>soymanco@roderick.com</label>
            <label>6544-8578</label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PerfilUsuario;
