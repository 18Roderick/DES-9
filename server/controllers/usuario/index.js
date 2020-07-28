const { Usuario } = require('../../models');

module.exports.getUsuario = async (req, res) => {
  try {
    let user = req.user;

    if (user.id) {
      user = await Usuario.findById(user.id, '-rol -activo -password ');

      if (user)
        res.json({
          success: true,
          data: user
        });
      else
        res.json({
          success: false,
          mensaje: 'Usuario no encontrado',
          data: user
        });
    } else {
      res.json({
        success: true,
        message: 'Usuario no Proporcionado',
        data: []
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Intente mas tarde'
    });
  }
};
