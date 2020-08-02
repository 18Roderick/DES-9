const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./usuarios');
const mercanciaRouter = require('./mercancia');

const apiRouter = require('./api');

router.get('/', (req, res) => {
  console.log(req.session);
  req.session.user ? req.session.user : (req.session.user = Math.random(10));
  res.render('index', { title: 'SEEDS' });
});

router.get('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

router.use('/api', apiRouter);
router.use('/auth', authRouter);
router.use('/usuario', userRouter);
router.use('/mercancia', mercanciaRouter);
router.get('/nosotros', (req,res) => {
  res.render('sobrenosotros', {title: 'Sobre Nosotros',user: req.session.user || null})
})

module.exports = router;
