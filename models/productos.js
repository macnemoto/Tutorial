'use strict'
const index = require('../index')
const mongoose = require('mongoose')
const Schema  = mongoose.Schema


const ProductosEsquema =Schema ( {

nombre: String,
imagen: String,
precio: {type: Number, default: 0},
catalogo: { type: String, emun: ['cable', 'consola' , 'cartucho']},
descripcion: String

})

module.exports = mongoose.model('neko', ProductosEsquema)