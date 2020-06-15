const mongoose = require('mongoose');
const { Schema } = mongoose;

const Metas = new Schema({
    titulo: String,
    descripcion: String,
    meta: Number,
    fecha_creacion: {
        type: Date,
        required: true,
        default: Date.now()
    },
    fecha_expiracion: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model('metas', Metas)