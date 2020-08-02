const { Usuario } = require('../../models');
const { fileUpload } = require('../../utils');

module.exports.getUsuario = async (req, res) => {
  try {
    let user = req.session.user;
    user = await Usuario.findById(user.id);
    res.render('perfilUsuario', {
      title: 'Usuario',
      user: req.session.user || null,
      usuario: user
    });
  } catch (error) {
    throw error;
  }
};

module.exports.uploadImage = async (req, res) => {
  try {
  } catch (error) {}
};
