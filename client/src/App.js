import React, { Fragment } from 'react';

<<<<<<< HEAD

function App() {

  return (
    <Fragment> 
        <Switcher></Switcher>
=======
import Switcher from './components/Switch';
import NavBarPrueba from './components/NavBarPrueba/NavBarPrueba'

function App() {
  return (
    <Fragment>
      <NavBarPrueba/>   
      <Switcher></Switcher>
>>>>>>> dev
    </Fragment>
  );
}

export default App;
