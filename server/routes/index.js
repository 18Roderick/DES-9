const express = require('express');
const router = express.Router();

const apiRouter = require('./api');

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Bienvenido a SEEDS '
  });
});

router.get('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

router.use('/api', apiRouter);

module.exports = router;
