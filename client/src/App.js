import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Hero/Hero';

import NavBar from './components/NavBar/NavBar';

import Switcher from './components/Switch';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <NavBar></NavBar>
      <Switcher></Switcher>
    </Fragment>
  );
}

export default App;
