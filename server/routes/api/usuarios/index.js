const router = require('express').Router();
const {usuario} = require('../../../controllers')
const {isAuthenticated} = require('../../../middlewares')

router.get('/',isAuthenticated,usuario.getUsuario);

module.exports = router;