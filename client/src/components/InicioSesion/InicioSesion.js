import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import * as autApi from '../../api/auth';

import { userSignin, clearErrorMessage } from '../../redux/auth/actions';
import formikConfig from './formikConfig';

const logonombre = require('./../../assets/img/LogoNombre.png');

const InicioSesion = () => {
  const dispatch = useDispatch();

  const { token, errorMessageSignin } = useSelector((state) => state.auth);

  const onSubmit = useCallback(
    (data) => {
      console.log(data);
      dispatch(userSignin(data));
    },
    [dispatch]
  );

  useEffect(() => {
    if (token.length) {
      alert('Usuario logueado con éxito');
    } else if (errorMessageSignin) {
      alert(errorMessageSignin);
      dispatch(clearErrorMessage());
    }
  }, [token, errorMessageSignin, dispatch]);

  formikConfig.onSubmit = onSubmit;
  const formik = useFormik(formikConfig);

  const passwordError = formik.errors.password ? <div>{formik.errors.password}</div> : null;
  const correoError = formik.errors.correo ? <div>{formik.errors.correo}</div> : null;

  return (
    <div className="iniciosesion">
      <div className="iniciosesion-imagen"></div>

      <div className="iniciosesion-formulario">
        <form className="iniciosesion-form" onSubmit={formik.handleSubmit}>
          <div className="fieldset">
            <img src={logonombre} alt="" />
            <label htmlFor="email" className="iniciosesion-label">
              Correo
            </label>
            <input
              id="email"
              className="iniciosesion-input "
              type="email"
              placeholder="seeds@ejemplo.com"
              {...formik.getFieldProps('correo')}
            ></input>
            {correoError}
            <label htmlFor="password" className="iniciosesion-label">
              Contraseña
            </label>
            <input
              id="password"
              className="iniciosesion-input"
              type="password"
              placeholder="*******"
              autoComplete="true"
              {...formik.getFieldProps('password')}
            ></input>
            {passwordError}
            <button type="submit" className="buttom hollow">
              Iniciar
            </button>
            <div className="flex">
              <Link to="/RecuperarContrasena" className="iniciosesion-link">
                Olvido su contraseña?
              </Link>
              <Link to="/RegistroUsuario" className="iniciosesion-link">
                Registrarse
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InicioSesion;
