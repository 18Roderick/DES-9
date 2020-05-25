import React from 'react';
const LogoNombre = require('./../../assets/img/LogoNombre.png');


const NavBar = ()=>(

    <div class="barra">
      <div class="contenedor bar">
        <div class="navegacion">
              <div className ="logo">
                <img src= {LogoNombre} alt="logo barra"/>
              </div >
          
              <nav class="navegacion-principal clearfix">
                <a href="">Sobre Nosotros</a>
                <a href="">Noticias</a>
                <a href="">Mercancia</a>
                <a href="">Metas</a>
                <a href="registro.html">Donaciones</a>
              </nav>
        </div>
      </div>
    </div>

);

export default NavBar;