const mongoose = require('mongoose');
const { Schema } = mongoose;

const Productos = new Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  imagen: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model('productos', Productos);
