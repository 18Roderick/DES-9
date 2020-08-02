const express = require('express');

const router = express.Router();

router.use((req, res) => {
  const errors = {
    status: 404,
    message: 'Pagina no Encontrada'
  };
  console.log('catch de error de ruta 404');
  res
    .status(404)
    .render('error', { title: 'Error', error: errors, user: req.session.user || null });
});

module.exports = router;
