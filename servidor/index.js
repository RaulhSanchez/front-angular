
const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const  conectDb  = require('./DB_Conection/conection');


mongoose.set("strictQuery", false);

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json()); 

conectDb()


app.get('/', (req,res) =>{
    res.send('hola')
})

app.listen(process.env.PORT, ()=>{console.log(process.env.PORT)})