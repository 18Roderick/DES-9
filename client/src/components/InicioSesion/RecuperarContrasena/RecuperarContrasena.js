import React from 'react';
const logonombre = require('./../../../assets/img/LogoNombre.png');

const RecuperarConstrasena = () => (
  <div className="recuperarContrasena">

    <div className="recuperarContrasena-formulario">
      <form>
        <fieldset className = 'fieldset2'>
          <img src={logonombre} />
          <label className="recuperarContrasena-label">Nueva contraseña</label>
          <input className = 'recuperarContrasena-input'></input>

          <label className="recuperarContrasena-label">Repetir contraseña</label>
          <input className = 'recuperarContrasena-input'></input>
          <button className = 'buttom hollow'>Guardar</button>
        </fieldset>
      </form>
    </div>
  </div>
);

export default RecuperarConstrasena;