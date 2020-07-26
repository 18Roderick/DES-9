import React from 'react';

import PerfilUsuario from '../components/PerfilUsuario/PerfilUsuario';

import DireccionesUsuario from '../components/DireccionesUsuario/DireccionesUsuario';

// const infoUsuario = {
//   userBanner: "",
//   userImgPerfil: "",
//   userNombre: { nombre: "Roderick", apellido: "Romero" },
//   userPais: "Panamá",
//   userDireccion: {
//     provincia: "Panamá",
//     distrito: "San Miguelito",
//     barrio: "Samaria",
//   },
//   userCorreo: "soymanco@roderick.com",
//   userTelefono: "6458-7896",
// };

const PanelUsuario = () => {
  return (
    <React.Fragment>
      <PerfilUsuario />
      <DireccionesUsuario />
    </React.Fragment>
  );
};

export default PanelUsuario;
