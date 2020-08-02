const { extractToken, token } = require('../utils');

const isAuthenticated = async (req, res, next) => {
  console.log(req.session);
  if ('id' in req.session.user) {
    next();
  } else {
    res.send('No tienes acceso a esto');
  }
};

const isAdmin = (req, res, next) => {
  console.log(extractToken(req.headers.authorization));
  next();
};

module.exports = { isAuthenticated, isAdmin };
