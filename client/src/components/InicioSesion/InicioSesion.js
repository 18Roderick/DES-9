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
          <label for = 'email' className="iniciosesion-label">Correo</label>
          <input id = 'email' className = 'iniciosesion-input'></input>

          <label for = 'password' className="iniciosesion-label">Contraseña</label>
          <input id = 'password' className = 'iniciosesion-input'></input>

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
