import React from 'react';
import imgperfil from './../../assets/img/roderick.jpg';
import imgbanner from './../../assets/img/smite.png';
import RecompensaDonaciones from '../RecompensaDonaciones/RecompensaDonaciones';



const infoUsuario = {
  userBanner: '',
  userImgPerfil:'',
  userNombre: {nombre:'Roderick',apellido:'Romero'},
  userPais:'Panamá',
  userDireccion: {provincia:'Panamá',distrito:'San Miguelito',barrio:'Samaria'},
  userCorreo: 'soymanco@roderick.com',
  userTelefono: '6458-7896',
}

// {
//   infoUsuario: {
//     userBanner,
//     userImgPerfil,
//     userNombre: { nombre, apellido },
//     userPais,
//     userDireccion: { provincia, distrito, barrio },
//     userCorreo,
//     userTelefono,
//   },
// }
const PerfilUsuario = () => (
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
            <label className="pulNombre">{`${infoUsuario.userNombre.nombre} ${infoUsuario.userNombreapellido}`}</label>
            <label className="pulPais">{infoUsuario.userPais}</label>
            <ul className="pu-ul">
              <li>{infoUsuario.userDireccion.provincia}</li>
              <li>{infoUsuario.userDireccion.distrito}</li>
              <li>{infoUsuario.userDireccion.barrio}</li>
            </ul>
            <label>{infoUsuario.userCorreo}</label>
            <label>{infoUsuario.userTelefono}</label>
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
