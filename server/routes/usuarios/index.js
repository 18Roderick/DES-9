const router = require('express').Router();
const {usuario} = require('../../controllers')
const {isAuthenticated} = require('../../middlewares')

router.get('/',isAuthenticated,usuario.getUsuario);
router.post('/direccion', isAuthenticated, usuario.agregarDireccion)
router.get('/carrito', usuario.verCarrito)
router.post('/image', isAuthenticated, usuario.uploadImage)

module.exports = router;