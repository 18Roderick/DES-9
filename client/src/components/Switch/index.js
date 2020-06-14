import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Home, News, Merch, Login, PanelUsuario } from "./../../pages";
import NavBar from "../NavBarPrueba/NavBarPrueba";

export default function Switcher() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route path="/index.html" exact component={Home}></Route>
        <Route path="/Merch" exact component={Merch}></Route>
        <Route path="/Login" exact component={Login}></Route>
        <Route path="/PanelUsuario" exact component={PanelUsuario}></Route>        
      </Switch>
    </BrowserRouter>
  );
}
