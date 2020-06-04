import React from 'react';
const loginimg = require('./../../assets/img/Login.jpg');
const logonombre = require('./../../assets/img/LogoNombre.png');

const InicioSesion = () => (
  <div className="iniciosesion">
    <div className="iniciosesion-imagen"></div>

    <div className="iniciosesion-formulario">
      <form className = 'iniciosesion-form'>
        <div className = 'fieldset'>
          <img src={logonombre} />
          <label htmlFor = 'email' className="iniciosesion-label">Correo</label>
          <input id = 'email' className = 'iniciosesion-input'></input>

          <label htmlFor = 'password' className="iniciosesion-label">Contraseña</label>
          <input id = 'password' className = 'iniciosesion-input'></input>

          <button className = 'buttom hollow'>Iniciar</button>
          <div className = 'flex'>
              <a href = '#' className = 'iniciosesion-link'>¿Olvido su contraseña?</a>
              <a href = '#' className = 'iniciosesion-link'>Registrarse</a>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default InicioSesion;
