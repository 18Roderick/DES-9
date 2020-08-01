const { Productos } = require('../../models');

module.exports.getMercancia = async (req, res) => {
  try {
    const productos = await Productos.find();
    res.json({
      success: true,
      data: productos
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: 'Error al consultar productos'
    });
  }
};
