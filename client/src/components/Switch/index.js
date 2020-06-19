import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  News,
  Merch,
  Login,
  PanelUsuario,
  RegistroUsuario,
  RecuperarContrasena,
} from './../../pages';

export default function Switcher() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/index.html" exact component={Home}></Route>
      <Route path="/Merch" exact component={Merch}></Route>
      <Route path="/Login" exact component={Login}></Route>
      <Route path="/PanelUsuario" exact component={PanelUsuario}></Route>
      <Route path="/RegistroUsuario" exact component={RegistroUsuario}></Route>
      <Route path="/RecuperarContrasena" exact component={RecuperarContrasena}></Route>
      <Route
        component={() => <h1 className="mt-5 text-center text-capitalize">Error 404</h1>}
      ></Route>
    </Switch>
  );
}
