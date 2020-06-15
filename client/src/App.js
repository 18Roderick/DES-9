import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Hero/Hero';

import NavBar from './components/NavBar/NavBar';

import Switcher from './components/Switch';

import InicioSesion from './components/InicioSesion/InicioSesion';

import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';

import Registro from './components/InicioSesion/Registro/Registro';

import RecuperarContrasena from './components/InicioSesion/RecuperarContrasena/RecuperarContrasena';

import Contacto from './components/Contact/index';

import DireccionesUsuario from './components/DireccionesUsuario/DireccionesUsuario';

function App() {

  const infoUsuario = {
      userBanner: '',
      userImgPerfil:'',
      userNombre: {nombre:'Roderick',apellido:'Romero'},
      userPais:'Panamá',
      userDireccion: {provincia:'Panamá',distrito:'San Miguelito',barrio:'Samaria'},
      userCorreo: 'soymanco@roderick.com',
      userTelefono: '6458-7896',
  }
  return (
    <Fragment>
      <Header></Header>
      <NavBar></NavBar>
      <Switcher></Switcher>
      <InicioSesion></InicioSesion>
      <Registro></Registro>
      <RecuperarContrasena></RecuperarContrasena>
      <Contacto></Contacto>
      <PerfilUsuario infoUsuario = {infoUsuario}></PerfilUsuario>
      <DireccionesUsuario></DireccionesUsuario>
    </Fragment>
  );
}

export default App;
