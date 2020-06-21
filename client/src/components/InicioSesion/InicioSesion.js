import React from 'react';

import { Link } from 'react-router-dom';
const logonombre = require('./../../assets/img/LogoNombre.png');

const InicioSesion = () => (
  <div className="iniciosesion">
    <div className="iniciosesion-imagen"></div>

    <div className="iniciosesion-formulario">
      <form className="iniciosesion-form">
        <div className="fieldset">
          <img src={logonombre} alt="" />
          <label htmlFor="email" className="iniciosesion-label">
            Correo
          </label>
          <input
            id="email"
            className="iniciosesion-input "
            type="email"
            placeholder="seeds@ejemplo.com"
          ></input>

          <label htmlFor="password" className="iniciosesion-label">
            Contraseña
          </label>
          <input
            id="password"
            className="iniciosesion-input"
            type="password"
            placeholder="*******"
            autoComplete="true"
          ></input>

          <button className="buttom hollow">Iniciar</button>
          <div className="flex">
            <Link to="/RecuperarContrasena" className="iniciosesion-link">
              Olvido su contraseña?
            </Link>
            <Link to="/RegistroUsuario" className="iniciosesion-link">
              Registrarse
            </Link>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default InicioSesion;
