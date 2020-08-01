const router = require('express').Router();
const {mercancia} = require('../../../controllers')

router.get('/', mercancia.getMercancia)

module.exports = router;