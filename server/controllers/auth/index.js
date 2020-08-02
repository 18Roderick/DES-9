const { validationResult } = require('express-validator/check');
const { Usuario } = require('../../models');
const { crypto } = require('../../utils');

module.exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, apellido, correo, password1, password2 } = req.body;
    const errors = validationResult(req);
    if (req.session.user) {
      res.redirect('/mercancia');
    }
    console.log('/crear usuario');
    if (!errors.isEmpty()) {
      let errores = {};
      console.log(errors.array());
      errors.array().forEach(err => {
        errores = { ...errores, [err.param]: err.msg };
      });
      console.log(errores, req.body, req.params, req.query);
      res.render('registroUsuario', {
        title: 'Registro de Usuario',
        errors: errores,
        form: req.body
      });
    } else {
      const newPass = await crypto.encrypt(password1);
      console.log(req.body);
      const user = await Usuario.create({ nombre, apellido, correo, password: newPass });

      const payload = {
        id: user._id,
        nombre,
        apellido
      };
      req.session.user = payload;
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);

    res.redirect('/auth/registro-usuario');
  }
};

module.exports.vistaRegistroUsuario = (req, res) => {
  console.log('Errores ', req.errors);
  if (req.session.user) {
    res.redirect('/mercancia');
  }
  res.render('registroUsuario', { title: 'Registro de Usuario' });
};

module.exports.iniciarSesion = async (req, res) => {
  try {
    const { password, correo } = req.body;
    console.log('Iniciar sesión', req);
    if (req.session.user) {
      res.redirect('/mercancia');
    }
    if (password != '' && correo != '') {
      const user = await Usuario.findOne({ correo });

      if (user) {
        const isValid = await crypto.compare(password, user.password);
        const payload = {
          id: user._id,
          nombre: user.nombre,
          apellido: user.apellido
        };

        req.session.user = payload;

        if (isValid) {
          res.redirect('/');
        } else {
          res.json({
            success: false,
            message: `Correo o contraseña no coinciden`
          });
        }
      } else {
        req.flash('registro', 'Este usuario no existe');
        res.redirect('/iniciar-sesion');
      }
    } else {
      req.flash('registro', 'usuario y contraseña requeridos');
      res.redirect('/iniciar-sesion');
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message
    });
  }
};

module.exports.vistaInciarSesion = (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    res.redirect('/mercancia');
  }
  res.render('login', { title: 'Login' });
};

module.exports.logOut = (req, res) => {
  req.session.destroy();
  req.redirect('/');
};
module.exports.recuperarContrasena = async (req, res) => {};
module.exports.refreshToken = async (req, res) => {};
