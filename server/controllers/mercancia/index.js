const { Productos } = require('../../models');

module.exports.getMercancia = async (req, res) => {
  try {
    const productos = await Productos.find();

    console.log(productos[0])
    res.render('mercancia', { title: 'Mercancía', productos: productos || [] , user: req.session.user || null});
  } catch (error) {
    console.error(error);
    throw error;
  }
};
