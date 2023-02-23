const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const conectDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB, {
            user:process.env.MONGO_DB_USER,
            pass: process.env.MONGO_DB_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('conectado en la base de datos')
    } catch (error) {
      console.log(error)
      process.exit(1) // detener la app  
    }
}

module.exports = conectDb