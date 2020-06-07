import React from 'react';
import imgperfil from './../../assets/img/roderick.jpg';
import imgbanner from './../../assets/img/smite.png';
import RecompensaDonaciones from '../RecompensaDonaciones/RecompensaDonaciones';

const PerfilUsuario = ({
  infoUsuario: {
    userBanner,
    userImgPerfil,
    userNombre: { nombre, apellido },
    userPais,
    userDireccion: { provincia, distrito, barrio },
    userCorreo,
    userTelefono,
  },
}) => (
  <div className="perfilusuario">
    <div className="perfilusuario-banner">
      <img src={imgbanner}></img>
    </div>
    <div className="perfilusuario-info">
        <img className="pu-imagenPerfil" src={imgperfil} />
        <button className="buttom-perfil mr-1 mt-1"><i class="fas fa-pencil-alt"></i></button>
      <div className="perfilusuario-contenedor">
        <div className="pu-contenedorinfo">
          <div className="perfilusuario-labels">
            <label className="pulNombre">{`${nombre} ${apellido}`}</label>
            <label className="pulPais">{userPais}</label>
            <ul className="pu-ul">
              <li>{provincia}</li>
              <li>{distrito}</li>
              <li>{barrio}</li>
            </ul>
            <label>{userCorreo}</label>
            <label>{userTelefono}</label>
          </div>
        </div>
        <div className="pu-contenedorRecompensas">
          <RecompensaDonaciones></RecompensaDonaciones>
        </div>
      </div>
    </div>
  </div>
);

export default PerfilUsuario;
