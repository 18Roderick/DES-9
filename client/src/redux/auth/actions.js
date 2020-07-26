import { authTypes } from './types';

//proceso de iniciar sesion
export const userSignInStart = (dto) => ({
  type: authTypes.USER_SIGNIN_START,
  payload: dto,
});

export const userSignInSuccess = (user) => ({
  type: authTypes.USER_SIGNIN_SUCCESS,
  payload: user,
});

export const userSignInFailed = (error) => ({
  type: authTypes.USER_SIGNING_FAILED,
  payload: error,
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
