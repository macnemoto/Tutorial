'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const neko = require('./models/productos')

const app = express()
const port = process.env.PORT  || 3000

app.use(bodyParser.urlencoded ({extended: false}))
app.use(bodyParser.json()) 


app.get('/api/producto', (req,res) => {
     res.status(200).send({producto: []})
})

app.get('/api/producto/:prodictoID', (req,res) => {
   
})
app.post('/api/producto', (req,res) => {
 console.log('PORT /api/productos')
 console.log(req.body)

 let productos = new neko()
 productos.nombre = req.body.nombre
 productos.imagen = req.body.imagen
 productos.precio = req.body.precio
 productos.catalogo = req.body.catalogo
 productos.descripcion = req.body.descripcion

 productos.save((err, productosStored) =>{
     if (err) res.status(500).send({mesage :`Error al salvar la base de datos papu ${err} `})
     res.status(200).send({prodictos : productosStored})
 })





})
app.put('/api/producto/:prodictoID', (req,res) => {

})
app.delete('/api/producto/:prodictoID', (req,res) => {

})


mongoose.connect('mongodb://localhost:27017/shop',{useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (err) {
        return console.log('Error en la conecion papu :(')
    }
    console.log('La Conexión a la hojita esta lista papu :V')
    app.listen(port, () =>  {
        console.log(`Api Rest corriendo en  http://localhost:${port}`)
    } )

   
})

