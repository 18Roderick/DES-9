const express = require('express');
const router = express.Router();
const { registroValidator } = require('../../middlewares');
const { auth } = require('../../controllers');

router.post('/registro-usuario', registroValidator, auth.crearUsuario);
router.get('/registro-usuario', auth.vistaRegistroUsuario)
router.post('/iniciar-sesion', auth.iniciarSesion);
router.get('/iniciar-sesion', auth.vistaInciarSesion);

module.exports = router;
