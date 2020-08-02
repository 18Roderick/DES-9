const router = require('express').Router();
const {usuario} = require('../../controllers')
const {isAuthenticated} = require('../../middlewares')

router.get('/',usuario.getUsuario);
router.post('/image', isAuthenticated, usuario.uploadImage)

module.exports = router;