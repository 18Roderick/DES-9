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

module.exports.agregarDireccion = async (req, res) => {
  try {
    const { pais, nombre, direccion, telefono } = req.body;
    let user = req.session.user;
    user = await Usuario.findById(user.id);

    if (user.direcciones.length < 2) {
      user.direcciones.push({ pais, nombre, direccion, telefono });
    }
    await user.save();

    console.log(user);
    res.redirect('/usuario');
  } catch (error) {
    throw error;
  }
};

module.exports.verCarrito = async (req, res) => {
  try {
    if (req.session.user) {
      const { pais, nombre, direccion, telefono } = req.body;
      let user = req.session.user;
      user = await Usuario.findById(user.id);
      if(!user.carrito.length){
        user.carrito = req.session.carrito || [];
      }
      console.log(user);
      res.render('carrito', { title: 'Carrito', user: req.session.user || null, usuario: user, carrito:user.carrito });
    }else{
      console.log(req.session);
      res.render('carrito', {title: 'Carrito', user: req.session.user || null})
    }
  } catch (error) {
    throw error;
  }
};

module.exports.uploadImage = async (req, res) => {
  try {
  } catch (error) {}
};
