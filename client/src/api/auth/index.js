import Axios from 'axios';

export const iniciarSesion = async (data) => {
  try {
    const response = await Axios.post('/api/auth/iniciar-sesion', data);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
};

export const registrarUsuario = async (data) => {
  try {
    const response = await Axios.post('/api/auth/registro-usuario', data);
    return response.data;
  } catch (error) {
    return error;
  }
};
