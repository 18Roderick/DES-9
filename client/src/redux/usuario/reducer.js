import { userTypes } from './types';

const INITIAL_STATE = {
  isFetchingUser: true,
  usuario: {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    imagen: '',
    rol: '',
    direcciones: [
      {
        pais: '',
        provincia: '',
        ciudad: '',
        distrito: '',
        corregimiento: '',
        detalles: '',
        barriada: '',
        telefono: '',
      },
    ],
  },
};

const userReducer = (currentState = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case userTypes.USER_FETCH_DATA_START:
      return {
        ...currentState,
        isFetchingUser: true,
      };

    case userTypes.USER_FETCH_DATA_SUCCESS:
      return {
        ...currentState,
        usuario: payload,
        isFetchingUser: false,
      };

    case userTypes.USER_FETCH_DATA_FAILED:
      return {
        ...currentState,
        errorMessageUser: payload.message,
        isFetchingUser: false,
      };
    default:
      return currentState;
  }
};

export default userReducer;
