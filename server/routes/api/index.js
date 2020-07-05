const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Bienvenido a SEEDS Api'
  });
});

//router.use('/api', api);

module.exports = router;
