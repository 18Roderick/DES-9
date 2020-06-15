import React from 'react';
import { Col, Row, Form, Container, Button } from 'react-bootstrap';

import loginimg from '../../assets/img/Login.jpg';
import { Link } from 'react-router-dom';
const logonombre = require('./../../assets/img/LogoNombre.png');

const InicioSesion = () => (
  <div className="iniciosesion">
    <div className="iniciosesion-imagen"></div>

    <div className="iniciosesion-formulario">
      <form className = 'iniciosesion-form'>
        <div className = 'fieldset'>
          <img src={logonombre} />
          <label htmlFor = 'email' className="iniciosesion-label">Correo</label>
          <input id = 'email' className = 'iniciosesion-input ' type='email' autoFocus  placeholder='seeds@ejemplo.com'></input>

          <label htmlFor = 'password' className="iniciosesion-label">Contraseña</label>
          <input id = 'password' className = 'iniciosesion-input' type='password' placeholder='*******'></input>

          <button className = 'buttom hollow'>Iniciar</button>
          <div className = 'flex'>
              <Link to = "/RecuperarContrasena" className = 'iniciosesion-link'><a href = '#'>¿Olvido su contraseña?</a></Link>
              <Link to = "/RegistroUsuario" className = 'iniciosesion-link'><a href = '#'>Registrarse</a></Link>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default InicioSesion;
