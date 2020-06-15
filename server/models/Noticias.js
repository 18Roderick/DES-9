const mongoose = require('mongoose');
const { Schema } = mongoose;

const Noticias = new Schema({
  titulo: String,
  imagen: String,
  descripcion: String,
  fecha: {
    type: Date
  }
});

module.exports = mongoose.model('noticias', Noticias);
