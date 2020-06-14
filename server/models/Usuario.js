const mongoose = require('mongoose');
const {Schema} = mongoose
const Usuario = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {},
  rol: {
    type: String,
    required: true,
    enum: ['admin', 'usuario'],
    default: 'usuario'
  },
  password: {
    type: String,
    required: true
  },
  direcciones: {
      //país, provincia, teléfono
  }
});

module.exports = mongoose.model('usuario', Usuario);
