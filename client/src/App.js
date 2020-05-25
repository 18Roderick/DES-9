import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


import Header from './components/Hero/Hero';

import NavBar from './components/NavBar/NavBar';

import Switcher from './components/Switch'


function App() {
  return (
    <Router>
      <Header></Header>
      <NavBar></NavBar>
      <Switcher></Switcher>
    </Router>
  );
}

export default App;
