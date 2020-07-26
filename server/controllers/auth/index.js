const { validationResult } = require('express-validator/check');
const { Usuario } = require('../../models');
const { crypto, token } = require('../../utils');

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
        correo,
        nombre,
        apellido
      };
      const newToken = await token.create(payload);
      res.json({
        success: true,
        message: 'Hola Bienvenido',
        token: newToken
      });
    }
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message
    });
  }
};

module.exports.iniciarSesion = async (req, res) => {
  try {
    const { password, correo } = req.body;

    if (password != '' && correo != '') {
      const user = await Usuario.findOne({ correo });

      if (user) {
        const isValid = await crypto.compare(password, user.password);
        const payload = {
          correo,
          nombre: user.nombre,
          apellido: user.apellido
        };
        const newToken = await token.create(payload);

        if (isValid) {
          res.json({
            success: true,
            message: `Hola Bienvenido ${user.nombre}`,
            token: newToken
          });
        } else {
          res.json({
            success: false,
            message: `Correo o contraseña no coinciden`
          });
        }
      } else {
        res.json({
          success: false,
          message: 'Este usuario no existe'
        });
      }
    } else {
      res.json({
        success: false,
        message: 'Correo o contraseña vacíos'
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message
    });
  }
};
module.exports.recuperarContrasena = async (req, res) => {};
module.exports.refreshToken = async (req, res) => {};
