import React from 'react';
import Navbar from './components/Navbar/index';
import Switcher from './components/Switch';

import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Switcher />
    </Router>
  );
}

export default App;
