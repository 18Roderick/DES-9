const mongoose = require('mongoose'),
const {Schema} = mongoose

const Compras = new Schema({
    fecha_compra:{
        type: Date,
        required: true,
        default: Date.now()
    },
    articulos:[{
        type: Schema.Types.ObjectId,
        ref: 'productos'
    }],
    total:{
        type: Number,
        required: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    }
})

module.exports = mongoose.model('compras', Compras)