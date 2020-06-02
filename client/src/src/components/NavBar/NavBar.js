import React from 'react';
const LogoNombre = require('./../../assets/img/LogoNombre.png');

const NavBar = () => (

  <div className="barra col-12">
      <div className="navegacion-desktop">
        <div className="navegacion-movil">
          <div className="logo">
            <img src={LogoNombre} alt="logo barra" />
          </div>

          <div className="menu-movil">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav class="navegacion-principal clearfix">
          <a href="">Sobre Nosotros</a>
          <a href="">Noticias</a>
          <a href="">Mercancia</a>
          <a href="">Metas</a>
          <a href="registro.html">Donaciones</a>
        </nav>
      </div>
  </div>
);

export default NavBar;
