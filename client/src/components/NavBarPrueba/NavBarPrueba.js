import React from "react";
import { Link } from "react-router-dom";
import LogoNavBar from "../../assets/img/LogoNombre.png";

const NavbBarPrueba = () => (
  <ul class="menu">
    <li class="menu_list">
      <Link to="/index.html">
        <span class="front">
          <img className="logo" src={LogoNavBar} />
        </span>
      </Link>
      <a href="#"></a>
    </li>

    <li class="menu_list">
      <Link to = '/Login'>
        <span class="front fas fa-user-astronaut"></span>
        <a href="#" class="side">
          Inicio sesion
        </a>
      </Link>
    </li>
    <li class="menu_list">
      <span class="front fas fa-users"></span>
      <a href="#" class="side">
        Nosotros
      </a>
    </li>
    <li class="menu_list">
      <span class="front fas fa-newspaper"></span>
      <a href="#" class="side">
        Noticias
      </a>
    </li>
    <li class="menu_list">
      <Link to="/Merch">
        <span class="front fas fa-briefcase"></span>
        <a href="#" class="side">
          Mercancia
        </a>
      </Link>
    </li>

    <li class="menu_list">
      <span class="front fas fa-flag"></span>
      <a href="#" class="side">
        Metas
      </a>
    </li>
    <li class="menu_list">
      <span class="front fas fa-hand-holding-usd"></span>
      <a href="#" class="side">
        Donaciones
      </a>
    </li>
    <li class="menu_list">
      <span class="front fas fa-shopping-cart"></span>
      <a href="#" class="side">
        Carrito
      </a>
    </li>
  </ul>
);

export default NavbBarPrueba;
