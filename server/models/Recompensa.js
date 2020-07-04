const mongoose = require('mongoose');
const { Schema } = mongoose;

const Recompensa = new Schema({
  titulo: String,
  descripcion: String,
  sellos: Number,
  producto: {
    type: Schema.Types.ObjectId,
    ref: 'productos'
  },
  fecha_expiracion: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('recompensas', Recompensa);