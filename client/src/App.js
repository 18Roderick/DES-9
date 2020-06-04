import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Hero/Hero';

import NavBar from './components/NavBar/NavBar';

import Switcher from './components/Switch';

import InicioSesion from './components/InicioSesion/InicioSesion';

import RecuperarContrasena from './components/InicioSesion/RecuperarContrasena/RecuperarContrasena';

import Registro from './components/InicioSesion/Registro/Registro';


function App() {
  return (
    <Fragment>
      <Header></Header>
      <NavBar></NavBar>
      <Switcher></Switcher>
      <InicioSesion></InicioSesion>
      <RecuperarContrasena></RecuperarContrasena>
      <Registro></Registro>
    </Fragment>
  );
}

export default App;
