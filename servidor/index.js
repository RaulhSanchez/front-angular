
const express = require('express')
const dotenv = require('dotenv').config()
const  conectDb  = require('./DB_Conection/conection');

const app = express()

app.use(express.json()); 

conectDb()

app.get('/', (req,res) =>{
    res.send('hola')
})

app.listen(process.env.PORT, ()=>{console.log('conectado en el peurto' + process.env.PORT)})