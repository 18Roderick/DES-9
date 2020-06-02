import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Hero/Hero';

import NavBar from './components/NavBar/NavBar';

import Switcher from './components/Switch';

import InicioSesion from './components/InicioSesion/InicioSesion';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <NavBar></NavBar>
      <Switcher></Switcher>
      <InicioSesion></InicioSesion>
    </Fragment>
  );
}

export default App;
