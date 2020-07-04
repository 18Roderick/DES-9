import React, { Fragment } from 'react';

import Switcher from './components/Switch';
import NavBarPrueba from './components/NavBarPrueba/NavBarPrueba';
//import Noticias from './components/Noticias/index';

function App() {
  return (
    <Fragment>
      <NavBarPrueba/>   
      <Switcher></Switcher>
    </Fragment>
  );
}

export default App;
