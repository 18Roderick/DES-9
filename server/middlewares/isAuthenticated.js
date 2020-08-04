const { extractToken, token } = require('../utils');

const isAuthenticated =  (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    console.log('llego aqui')
    res.redirect('/auth/iniciar-sesion');
  }
};


module.exports = { isAuthenticated };
