const router = require('express').Router();
const {usuario} = require('../../../controllers')
const {isAuthenticated} = require('../../../middlewares')

router.get('/',isAuthenticated,usuario.getUsuario);
router.post('/image', isAuthenticated, usuario.uploadImage)

module.exports = router;