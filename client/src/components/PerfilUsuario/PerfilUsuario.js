import React from 'react';
import imgperfil from './../../assets/img/roderick.jpg';
import imgbanner from './../../assets/img/smite.png';

const PerfilUsuario = () => (
  <div className="perfilusuario">
    <div className="perfilusuario-banner"></div>
    <div className="perfilusuario-info">
      <img src={imgperfil} />

      <div className="perfilusuario-contenedor">
        <div className="perfilusuario-labels">
          <label>Roderick Romero</label>
          <label>Panamá</label>
        </div>
      </div>
    </div>
  </div>
);

export default PerfilUsuario;
