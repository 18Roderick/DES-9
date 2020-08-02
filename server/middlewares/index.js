const { isAdmin, isAuthenticated } = require('./isAuthenticated');
const registroValidator = require('./registroValidator');

module.exports = {
  isAdmin,
  isAuthenticated,
  registroValidator
};
