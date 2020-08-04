const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./usuarios');
const mercanciaRouter = require('./mercancia');
const pagoRouter = require('./pagos')

const apiRouter = require('./api');


router.get('/robots.txt', function(req, res) {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

router.get('/', (req, res) => {
  res.render('index', { title: 'SEEDS',user: req.session.user || null });
});


router.use('/api', apiRouter);
router.use('/auth', authRouter);
router.use('/usuario', userRouter);
router.use('/mercancia', mercanciaRouter);
router.use('/pagos', pagoRouter)
router.get('/nosotros', (req,res) => {
  console.log(req.session)
  res.render('sobrenosotros', {title: 'Sobre Nosotros',user: req.session.user || null})
})
router.get('/noticias', (req,res) => {
  res.render('noticias', {title: 'Noticias',user: req.session.user || null})
})

module.exports = router;
