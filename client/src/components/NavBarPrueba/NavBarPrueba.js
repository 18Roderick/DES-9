import React from 'react';
import { Link } from 'react-router-dom';
import LogoNavBar from '../../assets/img/LogoNombre.png';

const Logo = () => (
  <span class="front">
    <img className="logo" src={LogoNavBar} alt="" />
  </span>
);

const NavbBarPrueba = () => (
  <ul class="menu">
    <li class="menu_list">
      <Link to="/">
        <span class="front">
          <img className="logo" src={LogoNavBar} alt="" />
        </span>
      </Link>
    </li>

    <li class="menu_list">
      <Link to="/Login">
        <span class="front fas fa-user-astronaut"></span>
        <Link to="/Login" className="side">
          Inicio sesión
        </Link>
      </Link>
    </li>
    <li class="menu_list">
      <Link to="/nosotros">
        <span class="front fas fa-users"></span>
        <Link to="/nosotros" className="side">
          Nosotros
        </Link>
      </Link>
    </li>
    <li class="menu_list">
      <Link to="/noticias">
        <span class="front fas fa-newspaper"></span>
        <Link to="/noticias" className="side">
          Noticias
        </Link>
      </Link>
    </li>
    <li class="menu_list">
      <Link to="/Merch">
        <span class="front fas fa-briefcase"></span>
        <Link to="/Merch" className="side">
          Mercancía
        </Link>
      </Link>
    </li>

    <li class="menu_list">
      <Link to="/metas">
        <span class="front fas fa-flag"></span>
        <Link to="/metas" className="side">
          Metas
        </Link>
      </Link>
    </li>
    <li class="menu_list">
      <Link to="/donaciones">
        <span class="front fas fa-hand-holding-usd"></span>
        <Link to="/donaciones" className="side">
          Donaciones
        </Link>
      </Link>
    </li>
    <li class="menu_list">
      <Link to="/carrito">
        <span class="front fas fa-shopping-cart"></span>
        <Link to="/carrito" className="side">
          Carrito
        </Link>
      </Link>
    </li>
  </ul>
);

export default NavbBarPrueba;
