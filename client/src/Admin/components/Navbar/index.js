import React from 'react';
import './index.css';
const NavBar = () => {
  return (
    <div class="s-layout">
      <div class="s-layout__sidebar">
        <a class="s-sidebar__trigger" href="#0">
          <i class="fa fa-bars"></i>
        </a>

        <nav class="s-sidebar__nav">
          <ul>
            <li>
              <a class="s-sidebar__nav-link" href="#0">
              <i class="fas fa-cart-plus"></i>
                <em>Mercancia</em>
              </a>
            </li>
            <li>
              <a class="s-sidebar__nav-link" href="#0">
                <i class="fa fa-home"></i>
                <em>Metas</em>
              </a>
            </li>        <li>
              <a class="s-sidebar__nav-link" href="#0">
                <i class="fa fa-home"></i>
                <em>Noticias</em>
              </a>
            </li>        <li>
              <a class="s-sidebar__nav-link" href="#0">
                <i class="fa fa-home"></i>
                <em>Recompensa</em>
              </a>
            </li>        <li>
              <a class="s-sidebar__nav-link" href="#0">
                <i class="fa fa-home"></i>
                <em>Usuario</em>
              </a>
            </li>
            <li>
              <a class="s-sidebar__nav-link" href="#0">
                <i class="fa fa-home"></i>
                <em>Texto</em>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main class="s-layout__content">
        <h1>Full View, Please!</h1>
      </main>
    </div>
  );
};

export default NavBar;
