'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT  || 3001

app.use(bodyParser.urlencoded ({extended: false}))
app.use(bodyParser.json()) 


app.get('/api/producto', (req,res) => {
    res.send(200, {producto: []})
})

app.get('/api/producto/:prodictoID', (req,res) => {
   
})
app.post('/api/producto', (req,res) => {
    console.log(req.body)
    res.send(200,{ mesage: 'El producto Ingresado'})
})
app.put('/api/producto/:prodictoID', (req,res) => {

})
app.delete('/api/producto/:prodictoID', (req,res) => {

})
app.listen(3001, () =>  {
    console.log(`Api Rest corriendo en  http://localhost:${port}`)
} )