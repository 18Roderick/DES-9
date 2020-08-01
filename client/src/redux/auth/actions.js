import { authTypes } from './types';
import * as authApi from '../../api/auth';

//proceso de iniciar sesion
export const userSignInStart = () => ({
  type: authTypes.USER_SIGNIN_START,
});

export const userSignInSuccess = (user) => ({
  type: authTypes.USER_SIGNIN_SUCCESS,
  payload: user,
});

export const userSignInFailed = (error) => ({
  type: authTypes.USER_SIGNING_FAILED,
  payload: error,
});

export const userSignin = (payload) => {
  return (dispatch) => {
    dispatch(userSignInStart());
    authApi
      .iniciarSesion(payload)
      .then((data) => {
        if ('token' in data) {
          dispatch(userSignInSuccess(data.token));
        } else {
          dispatch(userSignInFailed(data.message));
        }
      })
      .catch((error) => dispatch(userSignInFailed(error.message)));
  };
};

export const clearErrorMessage = () => ({
  type: authTypes.CLEAR_ERROR_SIGNIN,
});

//proceso de crear usuario
export const userSignUpStart = (dto) => ({
  type: authTypes.USER_SIGNUP_START,
  payload: dto,
});

export const userSignUpSuccess = (user) => ({
  type: authTypes.USER_SIGNUP_SUCCESS,
  payload: user,
});

export const userSignUpFailed = (error) => ({
  type: authTypes.USER_SIGNUP_FAILED,
  payload: error,
});

export const userLogoutStart = (data) => ({
  type: authTypes.USER_LOGOUT_START,
  payload: data,
});

export const userLogoutSuccess = () => ({
  type: authTypes.USER_LOGOUT_SUCCESS,
});

export const userLogoutFailed = (error) => ({
  type: authTypes.USER_LOGOUT_FAILED,
  payload: error,
});
