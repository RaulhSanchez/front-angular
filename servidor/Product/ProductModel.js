const { Schema, model } = require('mongoose');

const productSchema =  new Schema({
    name:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    localization:{
        type: String,
        required: true,
    },
    prize:{
        type: String,
        required: true,
    },
})

module.exports = model('Product', productSchema)