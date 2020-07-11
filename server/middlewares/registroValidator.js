const { check } = require('express-validator/check');
const Usuario = require('../models/Usuario');

const validadores = [
  check('nombre', 'debe contener nombre del usuario')
    .not()
    .isEmpty(),
  check('apellido', 'debe contener su apellido')
    .not()
    .isEmpty(),
  check('correo', 'se requiere un email')
    .not()
    .isEmpty(),
  check('correo', 'por favor introduzca un email valido')
    .isEmail()
    .normalizeEmail(),
  check('correo').custom(async value => {
    console.log('validando usuario');
    const user = await Usuario.findOne({ correo: value });
    if (user) throw new Error('El usuario ya existe');
    return true;
  }),
  check('password1', 'contraseña debe contener al menos 5 caracteres')
    .not()
    .isEmpty()
    .isLength({ min: 8 }),
  check('password2', 'contraseña no coinciden')
    .not()
    .isEmpty()
    .custom((value, { req }) => {
      if (value !== req.body.password1) throw new Error('contraseñas no coinciden');
      return true;
    })
];
module.exports = validadores;
