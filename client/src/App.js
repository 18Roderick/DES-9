import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Hero/Hero';

import NavBar from './components/NavBar/NavBar';

import Switcher from './components/Switch';

import InicioSesion from './components/InicioSesion/InicioSesion';

import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';

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
      <NavBar></NavBar>
      <Header></Header>      
      <Switcher></Switcher>
      <InicioSesion></InicioSesion>
      <PerfilUsuario infoUsuario = {infoUsuario}></PerfilUsuario>
      <DireccionesUsuario></DireccionesUsuario>
    </Fragment>
  );
}

export default App;
