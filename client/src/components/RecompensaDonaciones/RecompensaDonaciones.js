import React from 'react';
import loli from '../../assets/img/loli.png';
import sello from '../../assets/img/SelloRecompensa.png';
import arbol from '../../assets/img/333.jpg';

const RecompensaDonaciones = () => (
  <div className="rdContenedor">
    <div className="rdInformacion">
      <div className="rdInformacionDescripcion">
        <div className="descripcionTitulo">
          <div>Loli legal</div>
        </div>
        <div className="informacionDescripcion">
          <p>Loli 100% legal para darle amor y cariño incondicional</p>
        </div>
      </div>

      <div className="rdInformacionSellos">
        <div className="sellosRecompensas">
          <img src={sello} />
        </div>
        <div className="sellosRecompensas"> <img src={loli} /></div>
        <div className="sellosRecompensas"><img src={arbol} /></div>
      </div>
    </div>

    <div className="rdProducto">
      <img src={loli} />
    </div>
  </div>
);

export default RecompensaDonaciones;
