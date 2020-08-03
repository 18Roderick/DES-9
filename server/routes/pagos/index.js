const router = require('express').Router();
const { isAuthenticated } = require('../../middlewares');
const { pagos } = require('../../controllers');

router.post('/pago', /* isAuthenticated, */ pagos.pagar);


module.exports = router;