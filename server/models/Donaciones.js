const mongoose = require('mongoose');
const { Schema } = mongoose;

const Donaciones = new Schema({
  nombre: String,
  correo: String,
  monto: Number,
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'productos'
  },
  fecha: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

module.exports = mongoose.model('donaciones', Donaciones);
