import React from 'react';
import { Switch, Route} from 'react-router-dom';

import { Home, News, Merch, Login, PanelUsuario, RegistroUsuario, RecuperarContrasena } from './../../pages';
import NavBar from '../NavBarPrueba/NavBarPrueba';

export default function Switcher() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Merch" exact component={Merch}></Route>
      <Route path="/Login" exact component={Login}></Route>
      <Route path="/PanelUsuario" exact component={PanelUsuario}></Route>
      <Route path="/RegistroUsuario" exact component={RegistroUsuario}></Route>
      <Route path="/RecuperarContrasena" exact component={RecuperarContrasena}></Route>
    </Switch>
  );
}
