import React, { Fragment } from 'react';

import Switcher from './components/Switch';
import NavBarPrueba from './components/NavBarPrueba/NavBarPrueba';
//import Noticias from './components/Noticias/index';
import Contacto from './components/Contact/index';

function App() {
  return (
    <Fragment>
      <NavBarPrueba/>   
      <Switcher></Switcher>
      <Contacto></Contacto>
    </Fragment>
  );
}

export default App;
