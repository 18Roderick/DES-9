const mongoose = require('mongoose');
const { Schema } = mongoose;
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
    unique: true
  },
  telefono: {
    type: String
  },
  imagen: {
    type: String
  },
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
  activo: {
    type: Boolean,
    default: false
  },
  recompensas: {
    type: Schema.Types.ObjectId,
    ref: 'recompensas'
    
  },
  carrito:[{
    cantidad:Number,
    producto:{},
  }],
  direcciones: [
    {
      nombre: String,
      pais: String,
      direccion:String,
      telefono: String
    }
  ]
});

module.exports = mongoose.model('usuario', Usuario);
