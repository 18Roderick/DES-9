import React from 'react';

const DireccionesUsuarios = () => (
  <div className="direccionesUsuarios">
    <div>
      <label className="pulNombre">Direccion de envio</label>

      <ul className="dirUsuario">
        <li>Soy</li>
        <li>Manco</li>
        <li>En</li>
        <li>Smite</li>
      </ul>
    </div>

    <div>
        <button className = 'buttom-direcciones hollow'>Editar</button>
    </div>
  </div>
);

export default DireccionesUsuarios;
