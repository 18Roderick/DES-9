import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Hero/Hero';

import NavBar from './components/NavBar/NavBar';

import Switcher from './components/Switch';


import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';

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
      <PerfilUsuario infoUsuario = {infoUsuario}></PerfilUsuario>
    </Fragment>
  );
}

export default App;
