const { Usuario } = require('../../models');
const {fileUpload} = require('../../utils')


module.exports.getUsuario = async (req, res) => {
  try {

    res.render('perfilUsuario')
   
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Intente mas tarde'
    });
  }
};


module.exports.uploadImage = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
};