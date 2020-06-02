import React from 'react';
const loginimg = require('./../../assets/img/Login.jpg');
const logonombre = require('./../../assets/img/LogoNombre.png');

const InicioSesion = () => (
  <div className="iniciosesion">
    <div className="iniciosesion-imagen"></div>

    <div className="iniciosesion-formulario">
      <form>
        <fieldset className = 'fieldset'>
          <img src={logonombre} />
          <label className="iniciosesion-label">Nombre</label>
          <input className = 'iniciosesion-input'></input>

          <label className="iniciosesion-label">Apellido</label>
          <input className = 'iniciosesion-input'></input>
          <button className = 'buttom hollow'>Iniciar</button>
          <div className = 'flex'>
              <a href = '#' className = 'iniciosesion-link'>¿Olvido su contraseña?</a>
              <a href = '#' className = 'iniciosesion-link'>Registrarse</a>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
);

export default InicioSesion;
