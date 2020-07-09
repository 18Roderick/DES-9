import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Switcher from './components/Switch';
import NavBarPrueba from './components/NavBarPrueba/NavBarPrueba';

const UserPages = () => (
  <React.Fragment>
    <NavBarPrueba />
    <Switcher></Switcher>
  </React.Fragment>
);

const AdminPages = () => <h2>Hola has llegado a Admin</h2>;
//import Noticias from './components/Noticias/index';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={UserPages}></Route>
        <Route path="/admin" component={AdminPages}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
