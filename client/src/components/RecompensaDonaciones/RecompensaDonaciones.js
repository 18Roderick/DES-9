import React from 'react';
//import loli from '../../assets/img/loli.png';
import sello from '../../assets/img/SelloRecompensa.png';
import arbol from '../../assets/img/333.png';
import producto from '../../assets/img/12737.jpg';

const RecompensaDonaciones = () => (
  <div className="rdContenedor">
    <div className="rdInformacion">
      <div className="rdInformacionDescripcion">
        <div className="descripcionTitulo">
          <div>Semilla de arbol de manzano</div>
        </div>
        <div className="informacionDescripcion">
          <p>Semilla de arbol de manzado para iniciar la reforestacion de x lugar</p>
        </div>
      </div>

      <div className="rdInformacionSellos">
        <div className="sellosRecompensas">
          <img src={sello} />
        </div>
        <div className="sellosRecompensas">
          {' '}
          <img src={sello} />
        </div>
        <div className="sellosRecompensas">
          <img src={arbol} />
        </div>
      </div>
    </div>

    <div className="rdProducto">
      <img src={producto} />
    </div>
  </div>
);

export default RecompensaDonaciones;
