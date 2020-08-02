const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./usuarios');
const mercaciaRouter = require('./mercancia');

const apiRouter = require('./api');

router.get('/', (req, res) => {
  console.log(req.session);
  req.session.user ? req.session.user : (req.session.user = Math.random(10));

  res.status(200).json({
    success: true,
    message: 'Bienvenido a SEEDS ',
    count: req.session.user
  });
});

router.get('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

router.use('/api', apiRouter);
router.use('/auth', authRouter);
router.use('/usuario', userRouter);
router.use('/mercancia', mercaciaRouter);

module.exports = router;
