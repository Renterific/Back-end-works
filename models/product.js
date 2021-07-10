const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const Joi = require('joi');

const productSchema=mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    desc: {
        type: String
    },
    price_by_day: {
        type: Number
    },
    status_adminstaration: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    },
    status: {
        type: String,
        enum: ["unavailable", "available"],
        default: "available"
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category'
    },
    user: {
        type: mongoose.ObjectId,
        ref: 'User'
    }
})

productSchema.plugin(autoIncrement.plugin,'productNO');

const Product = mongoose.model('Product',productSchema);

module.exports = Product