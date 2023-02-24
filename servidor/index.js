
const express = require('express')
const dotenv = require('dotenv').config()
const  conectDb  = require('./DB_Conection/conection');
const cors = require('cors')

const productRoute = require('./Product/ProductRouter')

const app = express()

app.use(express.json()); 

conectDb()
app.use(cors())

app.use('/productos', productRoute)

app.listen(process.env.PORT, ()=>{console.log('conectado en el peurto' + process.env.PORT)})