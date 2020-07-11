const express = require('express');
const router = express.Router();
const { registroValidator } = require('../../../middlewares');
const { auth } = require('../../../controllers');

router.post('/registro-usuario', registroValidator, auth.crearUsuario);
router.post('/iniciar-sesion', auth.iniciarSesion);

module.exports = router;
