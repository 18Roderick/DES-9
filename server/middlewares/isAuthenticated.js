const { extractToken, token } = require('../utils');

const isAuthenticated = async (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/auth/iniciar-sesion');
  }
};


module.exports = { isAuthenticated };
