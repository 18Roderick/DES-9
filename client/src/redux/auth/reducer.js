import { authTypes } from './types';

const INITIAL_STATE = {
  token: '', //debería estar el token del usuario logeado
  isSignin: false,
  isSignUp: false,
  errorMessageSignin: '',
  isLoged: false,
  errorMessageLogout: '',
  errorMessageSignUp: '',
};

const authReducer = (currentState = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case authTypes.USER_SIGNIN_START:
      return {
        ...currentState,
        isSignin: true,
      };
    case authTypes.USER_SIGNIN_SUCCESS:
      return {
        ...currentState,
        isSignin: false,
        token: payload.token,

        //firebase: payload.firebase,
        isLoged: true,
      };

    case authTypes.USER_SIGNING_FAILED:
      return {
        ...currentState,
        isSignin: false,
        errorMessageSignin: payload.message,
      };
    case authTypes.USER_SIGNUP_START:
      return {
        ...currentState,
        isSignUp: true,
        //firebase: payload.firebase
      };

    case authTypes.USER_SIGNUP_SUCCESS:
      return {
        ...currentState,
        isSignUp: false,
        isLoged: true,
        token: payload.token,
      };

    case authTypes.USER_SIGNUP_FAILED:
      return {
        ...currentState,
        isSignUp: false,
        errorMessageSignUp: payload.message,
      };
    case authTypes.USER_LOGOUT_START:
      return {
        ...currentState,
        token: '',
        isLoged: false,
      };

    default:
      console.log('No se encontró una acción de este tipo ', type);
      return currentState;
  }
};

export default authReducer;
