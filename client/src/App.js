import React from 'react';

//
import Header from './components/Hero/Hero';

import NavBar from './components/NavBar/NavBar';

import Switcher from './components/Switch';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <NavBar></NavBar>
      <Switcher></Switcher>
    </React.Fragment>
  );
}

export default App;
