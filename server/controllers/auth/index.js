const { validationResult } = require('express-validator/check');
const { Usuario } = require('../../models');
const { crypto } = require('../../utils');

module.exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, apellido, correo, password1, password2 } = req.body;
    const errors = validationResult(req);

    console.log('/crear usuario');
    if (!errors.isEmpty()) {
      res.json({
        success: false,
        message: 'Se encontraron algunos errores',
        errors: errors.array()
      });
    } else {
      const newPass = await crypto.encrypt(password1);

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

    res.redirect('/registro-usuario');
  }
};

module.exports.vistaRegistroUsuario = (req,res) => {
  res.render('registroUsuario', {title: 'Registro de Usuario'})
}

module.exports.iniciarSesion = async (req, res) => {
  try {
    const { password, correo } = req.body;

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

module.exports.vistaInciarSesion = (req,res) => {
  res.render('login', {title: 'Login'})
}

module.exports.logOut = (req, res) => {
  req.session.destroy();
  req.redirect('/');
}
module.exports.recuperarContrasena = async (req, res) => {};
module.exports.refreshToken = async (req, res) => {};
